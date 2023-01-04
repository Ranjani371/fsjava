import React from 'react'
import { Link } from 'react-router-dom'
function SecondHeader() {
  return (
    <div className='second'>
      <nav className='item'>
          <ul className='ul'>
            <li>
            <Link to='/entryform'>EntryForm</Link>
            </li>
            <li>
            <Link to='/dailyregister'>Daily Register</Link>
            </li>
            <li>
            <Link to='/report'>Report</Link>
            </li>
            
          </ul>
        </nav>
    </div>
  )
}

export default SecondHeader