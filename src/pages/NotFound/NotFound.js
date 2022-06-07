import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import './NotFound.css'
import NotFoundImg from 'assets/images/notfound.jpeg'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <Navbar bg={'gray'}/>
      <div className='notFound-screen'>
          <h1>Page Not Found</h1>
          <img src={NotFoundImg} alt='NotFoundImg' />
          <button className='btn-homepage'>
            <Link to="/" className='text-homepage'>
              Home Page
            </Link>
          </button>
      </div>
    </>
  )
}

export default NotFound