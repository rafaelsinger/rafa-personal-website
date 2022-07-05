import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogLandingPage, ReviewPage, Review } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='reviews'>
          <Route path='home' element={<BlogLandingPage />} />
          <Route path='music' element={<ReviewPage reviewType='music' />} />
          <Route path='music/:slug' element={<Review />} />
          <Route path='movies' element={<ReviewPage reviewType='movies' />} />
          <Route path='movies/:slug' element={<Review />} />
          <Route path='books' element={<ReviewPage reviewType='books' />} />
          <Route path='books/:slug' element={<Review />} />
          <Route path='television' element={<ReviewPage reviewType='television' />} />
          <Route path='television/:slug' element={<Review />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
