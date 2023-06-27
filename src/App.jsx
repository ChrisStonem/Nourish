import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";

// import pages
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Foods } from "./pages/Foods";
import { Diary } from "./pages/Diary";
import { UserSettings } from "./pages/User_Settings";

export default function App() {

  return (
    <div>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Foods" element={<Foods />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Diary" element={<Diary />} />
            <Route path="/User_Settings" element={<UserSettings />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  )
}
