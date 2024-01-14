import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <div className='w-full min-h-[90vh] bg-[#f3f5fc] grid grid-cols-1 lg:grid-cols-2'>
  <div className='flex justify-center items-center lg:mt-20 p-4 lg:p-0 '>
    <div className='w-full max-w-[500px] lg:w-[400px] mx-auto'>
      <h1 className='text-center lg:text-start text-4xl font-semibold'>
        Approval and Ticketing lifecycle in HMO
      </h1>
      <p className='text-sm text-gray-400 my-4 text-center lg:text-left'>
        HMO is one of the fastest way to automate ticketing and approvals in Health. Ask for approvals, book appointment and track the lifecycle of requests.
      </p>
      <div className='flex flex-col items-center lg:flex-row lg:justify-between'>
        <Link to='/register'>
        <button className='w-full lg:w-auto bg-[#3b82f6] h-[40px] rounded-lg my-2 lg:my-0 lg:mr-2 px-4 text-white'>
          Register
        </button>
        </Link>
        <button className='hover:underline hover:text-[#3b82f6] px-4 transition-all duration-300'>
          Schedule A Demo
        </button>
      </div>
    </div>
  </div>
  <div className='bg-green-500'>
    <img src="" alt="" />
    <img src="" alt="" />
  </div>
</div>

    </>
  )
};

export default Hero;