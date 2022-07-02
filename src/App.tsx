import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogLandingPage from './components';

import Header from './components/Header'; //! DELETE


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='blog'>
          <Route path='home' element={<BlogLandingPage />} />
          <Route path='music' element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
