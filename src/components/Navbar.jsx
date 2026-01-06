import React from 'react'

const Navbar = () => {
  return (
    
    <nav className='flex mx-auto my-0 py-5 justify-between items-center max-w-250'>
      <div>
        <img src="/logo.png" alt="logo" />
     </div>
    
     <div>
      <li className='flex'>
        <ul className='px-4'>About</ul>
        <ul className='px-4'>Features</ul>
        <ul className='px-4'>Pricing</ul>
        <ul className='px-4'>Testimonials</ul>
        <ul className='px-4'>Help</ul>
      </li>
     </div> 
       
      <div> 
        <button className='px-4 font-bold hover:text-gray-500'>Sign In</button>
        <button className='border rounded-4xl p-2 text-red-400 px-10 font-semibold hover:text-red-600'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
