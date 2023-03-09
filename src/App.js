import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components import
import Header from './Components/Header';
import Maze from "./Components/Maze";
import Footer from "./Components/Footer";
import "../src/styles/main.css";
import { Project } from './Components/Project';

const App = () => {
  return (
    <>
      <Header/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Maze/>}/>
        <Route exact path='/project' element={<Project/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App