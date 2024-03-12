// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const UserDetails = ({ match }) => {
    const [user, setUser] = useState(null);
    const { name } = match.params;

    useEffect(() => {
        fetch(`/api/questions/${name}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [name]);

    return (
        <div>
            {user ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {user.name}</p>
                    <p>Salary: {user.salary}</p>
                    <p>Rent: {user.rent}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

// Prop validation
UserDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string.isRequired // Validate the name prop
        }).isRequired
    }).isRequired
};

export default UserDetails;
