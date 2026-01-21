import React from 'react'

const Subscription = ({planName, features, priceTag}) => {
  return (

            <div className='flex flex-col p-3 justify-center items-center border-2 rounded-lg border-gray-200 w-70 '>
                <img src="/free.png" alt="free" className='mt-10'/>
                <h1 className='mt-4 font-semibold'>{planName}</h1>
                <div className='mt-10 h-60'>

                    {
                        features.map((item)=>{
                            
                         return <div className='flex mt-4'>
                                <img src="/tick.png" alt="tick" height={13}/>
                                <p className='text-gray-500 font-light px-2 '>{item}</p>
                            </div>
                            
                        })
                    }


                </div>
                <div className='mt-30'>
                    {
                        priceTag ? 
                        <h2 className='text-xl font-semibold'>${priceTag}<span className='text-gray-400'> / mo</span></h2> :
                        <h2 className='text-xl font-semibold'>Free</h2> 
                    }
                    
                </div>
                <button className='border rounded-4xl p-2 mt-4 text-red-400 px-10 font-semibold hover:text-red-600'>Select</button>
            </div>
            
  )
}

export default Subscription
