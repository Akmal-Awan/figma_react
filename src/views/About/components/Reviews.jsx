import React from 'react'

const Reviews = () => {
  return (
   <div className='flex mx-auto my-0 py-10 px-15 justify-between items-center max-w-250'>
       <div className='flex'>
        <img src="/user.png" alt="user" />
        <h1 className='px-6 font-bold'>90+ <br /> <span className='font-light'>User</span></h1>
      </div>

      <div class="w-px h-20 bg-gray-200"></div>

      <div className='flex'>
        <img src="/location.png" alt="user" />
        <h1 className='px-6 font-bold'>30+ <br /> <span className='font-light'>Location</span></h1>
      </div>

      <div class="w-px h-20 bg-gray-200"></div>

      <div className='flex'>
        <img src="/Server.png" alt="user" />
        <h1 className='px-6 font-bold'>50+ <br /> <span className='font-light'>Server</span></h1>
      </div>
      

    </div>
  )
}

export default Reviews
