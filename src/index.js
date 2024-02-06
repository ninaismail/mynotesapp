const express = require('express');
const app = express();
const usersRoute = require('./routes/users');
const User = require('./models/User');

const connectDB = require('./config/db');
const insertUsersData = require('./database/insertUsersData');
// Connect to DB
connectDB();
//Insert Data
//insertUsersData();

app.use(express.json());
app.use('/api/users', usersRoute)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});