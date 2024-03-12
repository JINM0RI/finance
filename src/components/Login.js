// src/components/Login.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-800">
            <form onSubmit={handleSubmit} className="w-full max-w-xs p-8 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block font-bold">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-bold">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
