import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    
    <nav className='flex mx-auto my-0 py-5 justify-between items-center max-w-250'>
      <div>
        <img src="/logo.png" alt="logo" />
     </div>
    
     <div>
      <ul className='flex'>
        <li className='px-4'>
          <Link to="/about">About</Link>
        </li>
        <li className='px-4'>
          <Link to="/features">Features</Link>
          </li>
        <li className='px-4'>
          <Link to="/price">Pricing</Link>
        </li>
        <li className='px-4'>
          <Link to="/testimonial">Testimonials</Link>
        </li>
        <li className='px-4'>
          <Link to="/trusted">Trusted</Link>
        </li>
      </ul>
     </div> 
       
      <div> 
        <button className='px-4 font-bold hover:text-gray-500'>Sign In</button>
        <button className='border rounded-4xl p-2 text-red-400 px-10 font-semibold hover:text-red-600'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
