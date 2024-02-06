const express = require('express');
const router = express.Router()
const paginatedResults = require('../middleware/pagination');
const User = require('../models/User');

router.get('/', paginatedResults(User), (req, res) => {
    res.json(res.paginatedResults);
});
module.exports = router;