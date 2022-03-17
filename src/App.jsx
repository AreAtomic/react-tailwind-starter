import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Build, Home } from './pages';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/build' element={<Build />} />
      </Routes>
    </div>
  );
}

export default App;
