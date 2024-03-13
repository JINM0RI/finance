// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Fetch user details from backend when component mounts
        fetch('/api/userDetails')
            .then(response => response.json())
            .then(data => setUserDetails(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, []);

    return (
        <div>
            <h2>User Details</h2>
            {userDetails && (
                <ul>
                    {userDetails.map(userDetail => (
                        <li key={userDetail._id}>
                            <strong>Question:</strong> {userDetail.question}, <strong>Response:</strong> {userDetail.response}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserDetails;
