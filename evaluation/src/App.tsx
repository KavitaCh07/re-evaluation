import React from 'react';
import './App.css';
import './views/signin/signIn';
import SignIn from './views/signin/signIn';
import { Routes, Route } from "react-router-dom";
import SignUp from './views/signup/signUp';

function App() {
  return (
    <div>
      <Routes> <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;
