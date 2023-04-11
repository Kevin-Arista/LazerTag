import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Reservations from './pages/reservations';
import Contact from './pages/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </div>
);