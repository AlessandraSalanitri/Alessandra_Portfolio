import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import About from "./components/About";  
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import GamePage from "./components/GamePage";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />  
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/gamepage" element={<GamePage />} /> 
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
