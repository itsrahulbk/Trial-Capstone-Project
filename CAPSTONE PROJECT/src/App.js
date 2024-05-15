import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Content />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
