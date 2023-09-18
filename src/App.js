import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Gallery, Contact, Login } from './pages';
import { Navigation } from './components';

// styles
import './App.css';

const App = () => {
  return (
    <div className='App flex'>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App;