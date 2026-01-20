import React from 'react'

const Global = () => {
  return (
    <div className='mx-auto my-0 py-15 px-8 max-w-250'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl w-80 font-semibold text-center leading-10 tracking-wide'>
                Huge Global Network of Fast VPN
            </h1>
            <p className='mt-4 text-gray-600 text-center w-130'>
                See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>
        </div>
        <div className='mt-20 px-5'>
             <img src="/global.png" alt="global"  />
        </div>
        <div className='mt-2 px-2'>
            <img src="/sponsored.png" alt="sponsored" />
        </div>

    </div>
  )
}

export default Global
