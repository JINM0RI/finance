// backend/userquestions/userDetails.js
const express = require('express');
const router = express.Router();
const { userResponses } = require('./questions'); // Import the userResponses object

// GET endpoint to retrieve user details
router.get('/', async (req, res) => {
    try {
        res.json(userResponses);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Failed to fetch user details' });
    }
});

module.exports = router;
