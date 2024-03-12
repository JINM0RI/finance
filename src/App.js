// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
// import FinanceTracker from './components/FinanceTracker';
import UserQuestions from './components/UserQuestions';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/sid" component={UserDetails} />
                    <Route path="/" component={UserQuestions} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
