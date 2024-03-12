// src/components/UserQuestions.js
import React, { useState } from 'react';

const UserQuestions = () => {
    const [salary, setSalary] = useState('');
    const [rent, setRent] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: 'Current Salary',
                    response: salary
                })
            });

            await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: 'Current Rent',
                    response: rent
                })
            });

            await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: 'Name',
                    response: name
                })
            });

            // Reset state after submitting
            setSalary('');
            setRent('');
            setName('');
        } catch (error) {
            console.error('Error recording user responses:', error);
        }
    };

    return (
        <div>
            <h2>User Questions</h2>
            <label>
                What is your current salary?{' '}
                <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </label>
            <br />
            <label>
                What is your current rent?{' '}
                <input
                    type="text"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                />
            </label>
            <br />
            <label>
                What is your name?{' '}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UserQuestions;
