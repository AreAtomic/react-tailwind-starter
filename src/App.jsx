import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Build } from './pages';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Build />} />
      </Routes>
    </div>
  );
}

export default App;
