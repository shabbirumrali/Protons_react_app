import React from 'react';
import { UserProfile, Article } from './components/index';

// styles
import './App.css';

const App = () => {
  return (
    <div className='App flex'>
        <div className='user-profile'>
          <UserProfile />
        </div>
        <div className='articles'>
          <Article />
        </div>
    </div>
  )
}

export default App;