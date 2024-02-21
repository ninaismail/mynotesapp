const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const notesRoute = require('./routes/notes');
const connectDB = require('./config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'twice',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
    // Date.now() - 30 * 24 * 60 * 60 * 1000
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());

//const insertNoteData = require('./database/insertNotesData');

// Connect to DB
connectDB();

//Insert Data
//insertNotesData();

app.use(express.json());


app.use('/', authRoute)
app.use('/api/notes', notesRoute)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});