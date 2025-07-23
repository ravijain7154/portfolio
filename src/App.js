import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import BackToTopButton  from './components/BackToTopButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>} />
        </Routes>
        </div>
      </Router>
     <BackToTopButton/>
    </div>
  );
}

export default App;
