import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import News from './pages/News';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Weather from './components/Weather';
import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import SecondaryNavbar from './components/SecondaryNavbar';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import BuyNow from './components/buynow/BuyNow';


function App() {
  const context = useContext(UserContext);
  const {user,setProgress, progress } = context;

  return (
    <div>
      <Router>
        <LoadingBar
          color='#4DFF01' height={3} transitionTime={300}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {user && <Navbar />}
        {user && <SecondaryNavbar />}
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Home/>} />
          <Route path="/news" element={!user ? <Login /> : <News/>} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to='/' />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path="/getproduct/:id" element={!user ? <Login /> : <SingleProduct/>} />
          <Route path="/category/:category" element={!user ? <Login /> : <Category/>} />
          <Route path="/about" element={!user ? <Login /> : <About/>} />
          <Route path="/contact" element={!user ? <Login /> : <Contact/>} />
          <Route path="/buynow" element={user ? <BuyNow /> : <Navigate to='/login' />} />
        </Routes>

        {user && <Footer />}
        {user && <Weather/>}
      </Router>
    </div>
  )
}

export default App;
