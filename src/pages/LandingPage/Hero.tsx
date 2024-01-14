import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full h-[90vh] bg-[#f3f5fc] grid lg:grid-cols-2'>
        <div className=' flex justify-center items-center mt-24'>
            <div className=' w-[500px] h-[400px]'>
               <h1 className=' max-md:text-center text-4xl font-[600]'>
               Approval and Ticketing Workflows in Slack
               </h1>
               <p className=' text-[15.5px] font-[400] text-gray-400 my-6 max-md:text-center'>Wrangle is the fastest way to automate ticketing and approvals in Slack. Ask for approvals, assign tasks and track the lifecycle of requests.
               </p>
               <div className=' w-[300px] h-[50px] lg:w-full flex text-[18px] font-[400] justify-center lg:justify-items-start'>
                   <button className=' w-[100px] bg-[#3b82f6] h-[40px] rounded-lg px-4'>Regiter</button>
                   <button className=' hover:underline hover:text-[#3b82f6] px-4 hover:transition-all hover:duration-300'>Schedule A Demo</button>
               </div>
            </div>
        </div>
        <div className=' bg-green-500'></div>
    </div>
  )
}

export default Hero;