import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Skills from './components/Projects/Skills';

function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Skills />
      <Footer />
    </React.Fragment>
  );
}

export default App;
