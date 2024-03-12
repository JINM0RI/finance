// src/components/FinanceTracker.js
import React, { useEffect, useState } from 'react';

const FinanceTracker = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/financeData')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Finance Tracker</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default FinanceTracker;
