const express = require('express');
const app = express();
const notesRoute = require('./routes/notes');
const Note = require('./models/Note');

const connectDB = require('./config/db');
//const insertUsersData = require('./database/insertUsersData');
// Connect to DB
connectDB();
//Insert Data
//insertUsersData();

app.use(express.json());
app.use('/api/notes', notesRoute)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});