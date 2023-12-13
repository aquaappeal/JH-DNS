import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
// import { Jobhunt, Men, PostAJob, Register, Login } from './components/pages';
import Jobhunt from './components/pages/Jobhunt';
import Men from './components/pages/Men';
import PostAJob from './components/pages/PostAJob';
import Register from './components/pages/Register';
import Login from './components/pages/Login';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Jobhunt />} />
        <Route path="/men" element={<Men />} />
        <Route path="/post-a-job" element={<PostAJob />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
