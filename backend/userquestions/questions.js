// backend/userquestions/questions.js
const express = require('express');
const router = express.Router();
const users = require('./users');

// POST endpoint to record user responses
router.post('/', (req, res) => {
    const { name, salary, rent } = req.body;
    // Log user details
    console.log(`Name: ${name}, Salary: ${salary}, Rent: ${rent}`);
    
    let user = users.find(user => user.name === name); // Find the user object
    if (!user) {
        user = { name }; // If user doesn't exist, create it
        users.push(user);
    }

    // Update user object with salary and rent details
    user.salary = salary;
    user.rent = rent;

    // Log updated users array
    console.log('Updated users:', users);
    res.json({ message: 'User details recorded successfully' });
});

module.exports = router;
