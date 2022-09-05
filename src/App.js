import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
};

export default App;
