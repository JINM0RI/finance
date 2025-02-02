import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserQuestions = () => {
    const [salary, setSalary] = useState('');
    const [rent, setRent] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            // Your fetch requests here...

            // Reset state after submitting
            setSalary('');
            setRent('');
            setName('');
        } catch (error) {
            console.error('Error recording user responses:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-900">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">User Questions</h2>
                <label className="block mb-4">
                    What is your current salary?
                    <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </label>
                <label className="block mb-4">
                    What is your current rent?
                    <input
                        type="text"
                        value={rent}
                        onChange={(e) => setRent(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </label>
                <label className="block mb-4">
                    What is your name?
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </label>
                <button
                    className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    <Link to="/Budget">Submit</Link>
                </button>
            </div>
        </div>
    );
};

export default UserQuestions;
