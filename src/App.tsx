import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogLandingPage from './BlogLandingPage/BlogLandingPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/blog/home' element={<BlogLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
