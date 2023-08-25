// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// file path 
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/home" element={<HomeComponent/>} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
