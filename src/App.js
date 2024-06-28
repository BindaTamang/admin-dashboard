import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './Tables/Tables';
import './App.scss'
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
        <Header/>
        <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
          <Route path="/table" element={<Table />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
