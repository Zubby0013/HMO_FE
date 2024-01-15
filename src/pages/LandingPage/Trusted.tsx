import React from 'react'
import Cards from './Cards';
import codelab from '../../assets/CodeLab Best Logo.png';

const Trusted = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
  <div className='w-full md:w-[95%] py-24 flex justify-between items-center flex-col px-6'>
    <div className='w-full border-b py-8 mb-20 min-h-[200px]'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-3xl font-semibold'>
        Trusted By Global Companies:
      </h1>
      <div className='w-full  py-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        <div className=''>
          <img src={codelab} alt="" className=' object-contain w-auto h-auto'/>
        </div>
        <div className=' h-[50px]'>
          <img src={codelab} alt="" className=' object-contain w-auto h-auto'/>
        </div>
        <div className=' h-[50px]'>
          <img src={codelab} alt="" className=' object-contain w-auto h-auto'/>
        </div>
        <div className=' h-[50px]'>
          <img src={codelab} alt="" className=' object-contain lg:object-cover w-auto h-auto'/>
        </div>
        <div className=' h-[50px]'>
          <img src={codelab} alt="" className=' object-contain w-auto h-auto'/>
        </div>
      </div>
    </div>
    <div className='w-full min-h-[200px] grid grid-cols-1 md:grid-cols-2 py-10 gap-4 justify-between'>
  <div className=''>
    <h1 className='text-2xl md:text-3xl lg:text-[50px] font-semibold mb-6'>
      We Automate Health Requests
    </h1>
  </div>
  <div className=''>
    <p className='text-sm md:text-base lg:text-lg font-medium text-gray-700'>
      HMO is the premier Lifecycle management tool designed for Health assurance. There are a number of reasons why you may want to use Lifecycle to manage your Yourself and families Health.
    </p>
  </div>
</div>
   <Cards/>
  </div>
</div>

  )
};

export default Trusted;