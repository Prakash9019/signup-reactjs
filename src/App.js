import React from 'react'
import Signup from './components/Signup';
import Login from './components/login';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Signup/>} />
        </Routes>
      </Router>
  );
}

export default App;