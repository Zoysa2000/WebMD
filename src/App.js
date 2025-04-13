import React from 'react';
import './App.css';
import Home from './Components/Home';
import PatientReg from './Components/PatientReg';
import {BrowserRouter as
  Router,
  Routes,
  Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/PatientReg" element={<PatientReg/>}></Route>
  </Routes>
  </Router>
);
}

export default App;
