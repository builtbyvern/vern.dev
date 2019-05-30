import React, { setState } from 'react';
import './App.scss';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Blah from './components/Blah'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Blah />
      <Footer />
    </>
  );
}

export default App;
