import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogLandingPage, ReviewPage } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='reviews'>
          <Route path='home' element={<BlogLandingPage />} />
          <Route path='music' element={<ReviewPage reviewType='music' />} />
          <Route path='movies' element={<ReviewPage reviewType='movies' />} />
          <Route path='books' element={<ReviewPage reviewType='books' />} />
          <Route path='television' element={<ReviewPage reviewType='television' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
