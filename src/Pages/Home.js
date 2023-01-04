import React from 'react'
import { Link } from 'react-router-dom'
//import Header from '../components/Header'

function Home() {
  return (
    <div className='home'>
      WELCOME!!!! <br />
      <Link className='ass' to='/entryform'>CLICK HERE TO START...</Link>
    </div>
  )
}

export default Home