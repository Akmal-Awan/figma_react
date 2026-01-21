import React from 'react'
import Subscription from './Subscription'

export default function Plan(){
    const subscriptions = [
        {
            planName: "Free Plan",
            features: [
                "Unlimited Bandwitch", 
                "Encrypted Connection",
                "No Traffic Logs",
                "Works on All Devices"
            ],
            
        },
        {
            planName: "Standard Plan",
            features: [
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "Yes Traffic Logs",
                "Works on All Devices",
                "Connect Anyware",
            ],
            priceTag: "10"
        },
        {
            planName: "Premium Plan",
            features: [
                "Unlimited Bandwitch",
                "Encrypted Connection",
                "yes Traffic Logs",
                "Works on All Devices",
                "Connect Anyware",
                "Get New Features"
            ],
            priceTag:  "20"
        }
    ]
  return (
    <div className='mx-auto my-0 py-20 px-8 max-w-250'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold leading-10 tracking-wide'>
                Choose Your Plan
            </h1>
            <p className='mt-4 text-gray-600'>
                Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>
        </div>
        <div className='flex justify-between item-center mt-10 max-w-250'>
            {
                subscriptions.map((item) => {
                    return <Subscription planName={item.planName} features={item.features} priceTag={item.priceTag} />

                } )
            }
        </div>
    </div>
  )
}





