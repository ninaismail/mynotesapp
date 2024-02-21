const express = require('express');
const router = express.Router()
const paginatedResults = require('../middleware/pagination');
const Note = require('../models/Note');

router.get('/', paginatedResults(Note), (req, res) => {
    res.json(res.paginatedResults);
});
module.exports = router;