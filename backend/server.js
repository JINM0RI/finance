// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const questionsRouter = require('./userquestions/questions');
const userDetailsRouter = require('./userquestions/userDetails');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
const financeData = {
    income: 5000,
    expenses: 3000,
    savings: 2000
};

// Finance data endpoint
app.get('/api/financeData', (req, res) => {
    res.json(financeData);
});

//Routes
app.use('/api/questions', questionsRouter);
app.use('/api/userDetails', userDetailsRouter);

app.get('/', (req, res) => {
    res.send('Server is up and running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
