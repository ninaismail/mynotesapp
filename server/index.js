const express = require('express');
const authRoute = require('./routes/auth');
const notesRoute = require('./routes/notes');
const connectDB = require('./config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'twice',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL
    })
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());

//const insertNoteData = require('./database/insertNotesData');

// Connect to DB
connectDB();

//Insert Data
//insertNotesData();


app.use('/', authRoute)
app.use('/api/notes', notesRoute)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});