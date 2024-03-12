// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'; // Import useParams hook for v6

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const { username } = useParams(); // Get username parameter from the route

    useEffect(() => {
        fetch(`/api/questions/${username}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [username]);

    return (
        <div>
            {user ? (
                <div>
                    <h2>User Details for {user.name}</h2>
                    <p>Username: {user.name}</p>
                    <p>Salary: {user.salary}</p>
                    <p>Rent: {user.rent}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetails;
