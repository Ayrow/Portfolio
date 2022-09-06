import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Hero, Navbar, Footer } from './component';

import Contact from './pages/Contact';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
