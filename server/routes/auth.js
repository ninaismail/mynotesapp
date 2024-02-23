const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {};

  // Duplicate email error
  if (err.code === 11000) {
    errors.email = "This email is already registered";
    return errors;
  }
  // Validation errors
  if (err.message.includes('User validation failed')) {
    // If the validation failed, send the errors
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}

//cookie expiration date
const expiryDate = new Date(Date.now() + 3600000); // 1 hour for the cookie to expire

//create json web token
const createToken = (id) => {
  return jwt.sign(
    {
      id: id.toString(),
    },
    // this means that after 3 days we can not access the use token anymore so the user has to login again
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );
};

//Register
router.post("/auth/register", async (req, res) => {

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  });

  try {
    const user = await newUser.save();
    const accessToken = createToken(user._id);
    console.log('access_token', accessToken);
    res.cookie('access_token', accessToken, { httpOnly: true, expires: expiryDate });
    res.status(201).json(user)
  } catch (err) {
    console.log(err)
    const errors = handleErrors(err);
    res.status(400).json({errors});
  }
});

//Login
router.post('/auth/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("Invalid email and password, user not found.");
    }
    const accessToken = createToken(user._id);
    console.log('access_token', accessToken);
    res.cookie('access_token', accessToken, { httpOnly: true, maxAge: expiryDate });
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({errors});
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      // New user data
      const newUser = {
        name: profile.displayName,
        // firstName: profile.name.givenName,
        // lastName: profile.name.familyName,
        email: profile.emails[0].value,
        password: "Can't_Access_Password",
        profilePicture: profile.photos[0].value,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      if (profile.phoneNumbers && profile.phoneNumbers.length > 0) {
        newUser.phone = profile.phoneNumbers[0].value;
      } else {
        newUser.phone = "00000000";
      }
      try {
        let user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
          const accessToken = createToken(user._id);
          done(null, user, accessToken);
          // If user is not found, create it
        } else {
          user = await User.create(newUser);
          const accessToken = createToken(user._id);
          done(null, user, accessToken);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

//Google Login Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

//Retrieve user data
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login-failure",
    successRedirect: "/dashboard",
  }),
  function(req, res){
    console.log('access_token', req.accessToken);
    res.cookie('access_token', req.accessToken, { httpOnly: true, maxAge: expiryDate });
  }
);

//Route if something goes wrong
router.get('/auth/login-failure', (req, res) => {
  res.send('Something went wrong...');
});

//Destroy user session
router.get('/auth/logout', (req, res) => {
  req.session.destroy(error => {
    if(error) {
      console.log(error);
      res.send('Error loggin out');
    } else {
      res.redirect('/')
    }
  })
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = router;