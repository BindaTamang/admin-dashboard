import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleSisebar} from '../features/LayoutSlice'
import {FaCog, FaStar, FaBars, FaBell, FaUser} from 'react-icons/fa'
import './Header.scss'


const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='header-container' p={2}>
      <input type='text' placeholder='type here..'></input>
      <button className='btn-header'>Oline Builder </button>
      <button className='icon-item' onClick={() => dispatch(toggleSisebar())}>
        <FaBars size={24} />
      </button>
      <div className="star-box">
        <button className="star-button">
          <FaStar size={20} />
          <span>Star</span>
        </button>
        <div className="follower-side">
          <div className="follower">
            10,100
          </div>
        </div>
      </div>
      <div className='header-icon'>
      <button className='icon-item' >
        <FaBell size={24} />
      </button>
      <button className='icon-item'>
        <FaCog size={24} />
      </button>
      <button className='icon-item'>
        <FaUser size={24} />
      </button>

      </div>
      
    </div>
  )
}

export default Header