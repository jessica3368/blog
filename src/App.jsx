import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <div className="container">
          <Home />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;