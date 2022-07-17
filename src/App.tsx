import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BlogLandingPage, Review, ReviewContainer, Portfolio } from './components';

//TODO: add share button to review page w/ functionality
//TODO: add comments to review page


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='reviews'>
          <Route path='' element={<Navigate to='home' />} />
          <Route path='home' element={<BlogLandingPage />} />
          <Route path='music' element={<ReviewContainer reviewType='music' />} />
          <Route path='music/:slug' element={<Review reviewType='music'/>} />
          <Route path='movies' element={<ReviewContainer reviewType='movies' />} />
          <Route path='movies/:slug' element={<Review reviewType='movies' />} />
          <Route path='books' element={<ReviewContainer reviewType='books' />} />
          <Route path='books/:slug' element={<Review reviewType='books' />} />
          <Route path='television' element={<ReviewContainer reviewType='television' />} />
          <Route path='television/:slug' element={<Review reviewType='television' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
