import React from 'react'

const Features = () => {
  return (
    <div className='bg-gray-100'>
    <div className='flex mx-auto my-0 py-10 px-8 justify-between items-center max-w-250'>
      <div>
        <img src="/feature.png" alt="feature" width={400}/>
      </div>
      <div>
        <h2 className='text-2xl font-semibold leading-10 tracking-wide'>
            We Provide Many <br /> Features You Can Use
        </h2>
         <p className='text-gray-600 py-5'>
                You can explore the features that we provide with fun <br /> and have their own functions each feature.
        </p> 
        <div className='flex py-2'>
            <img src="/tick.png" alt="" className='pr-2' />
            <p className='text-gray-500 font-light'>Powerfull online protection.</p>
        </div>
        <div className='flex py-2'>
            <img src="/tick.png" alt="" className='pr-2' />
            <p className='text-gray-500 font-light'>Internet without borders.</p>
        </div>
        <div className='flex py-2'>
            <img src="/tick.png" alt="" className='pr-2' />
            <p className='text-gray-500 font-light'>Supercharged VPN</p>
        </div>
        <div className='flex py-2'>
            <img src="/tick.png" alt="" className='pr-2' />
            <p className='text-gray-500 font-light'>No specific time limits.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
