import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WeeklySpecials from './components/WeeklySpecials';
import ReservationForm from './components/ReservationForm';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <WeeklySpecials />
            <ReservationForm />
          </>} />
          <Route path="/about" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
