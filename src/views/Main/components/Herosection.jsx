import React from 'react'

const Herosection = () => {
  return (
    <div className='flex mx-auto my-0 py-10 justify-between items-center max-w-250'>
       
        <div>
            <h2 className='text-3xl font-bold leading-10 tracking-wide'>
                Want anything to be <br /> easy with <span className='font-extrabold'>LaslesVPN.</span>
            </h2>
            <p className='text-gray-600 py-5'>
                Provide a network for all your needs with ease and fun using <span className='font-semibold'>LaslesVPN.</span> discover interesting features from us.
            </p>
            <button className="bg-red-500 text-white px-10 py-2 rounded-lg font-semibold drop-shadow-lg hover:bg-red-400">
                Get Started
            </button>
        </div>

        <div>
            <img src="/hero.png" alt="herosection" />
        </div>
    </div>
  )
}

export default Herosection
