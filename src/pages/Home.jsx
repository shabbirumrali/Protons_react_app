import React from 'react'

// styles
import './pages.css';
import { Article, UserProfile } from '../components';

const Home = () => {
  return (
    <>
        <div className='user-profile'>
          <UserProfile />
        </div>
        <div className='articles'>
          <Article />
        </div>
    </>
  )
}

export default Home