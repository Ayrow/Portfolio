import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default App;
