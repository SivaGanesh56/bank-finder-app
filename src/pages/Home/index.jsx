import React from 'react'
import Sidebar from '../../components/Sidebar';

import './index.css';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <h1 className='header'>Welcome to Bank Finder App</h1>
        </div>
    </div>
  )
}

export default Home