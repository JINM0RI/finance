// backend/userquestions/questions.js
const express = require('express');
const router = express.Router();
const users = require('./users');

// POST endpoint to record user responses
router.post('/', (req, res) => {
    const { question, response } = req.body;
    // Log user response
    console.log(`Question: ${question}, Response: ${response}`);
    
    let user1 = users.find(user => user.name === 'user1'); // Find the user1 object if exists
    if (!user1) {
        user1 = { name: 'user1' }; // If user1 doesn't exist, create it
        users.push(user1);
    }

    // Update user1 object with user response
    user1[question.toLowerCase()] = response;

    // Log users array
    console.log('users:', users);
    res.json({ message: 'Response recorded successfully' });
});

// GET endpoint to retrieve users array
router.get('/', (req, res) => {
    res.json(users);
});
router.get('/:name', (req, res) => {
    const { name } = req.params;
    const user = users.find(user => user.name.toLowerCase() === name.toLowerCase());
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
