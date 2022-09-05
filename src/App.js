import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Hero, Navbar, Footer } from './component';

import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
