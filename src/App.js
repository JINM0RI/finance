// App.js or your router setup file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserQuestions from './components/UserQuestions';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<UserQuestions />} />
          <Route path="/:username" element={<UserDetails />} />
          <Route path='/Login' element={<Login></Login>} ></Route>
          <Route path='/Signup' element={<Signup></Signup>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
