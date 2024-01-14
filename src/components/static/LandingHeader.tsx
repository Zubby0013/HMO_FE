import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const LandingHeader = () => {
  const [scroll, setScroll] = useState(false);

  const headerChange =  () => {
    if (window.pageYOffset >= 70) {
        setScroll(false);
    } else{
        setScroll(true);
    }
}
window.addEventListener("scroll", headerChange);

  return (
    <div>
      {scroll? (
        <div className=' w-full h-[70px] flex justify-center items-center fixed bg-[#f3f5fc]'>
        <div className=' w-[95%] h-[90%] flex justify-between items-center'>
            <div className=' w-[150px] lg:w-[200px] bg-green-400 '>Logo</div>
            <div className=' w-[380px] hidden lg:flex justify-between items-center text-[18px] font-[400] cursor-pointer'>
              <nav>Features</nav>
              <nav>Pricing</nav>
              <nav>Blog</nav>
              <nav>Contact Us</nav>
            </div>
            <div className=' w-[220px] hidden lg:block text-[18px] font-[400]'>
            <Link to='/login'>
              <button className=' w-[80px] h-[40px]'>Login</button>
              </Link>
              <Link to='/register'>
              <button className=' w-[130px] h-[40px] bg-[#3b82f6] rounded-lg text-white'>Register</button>
              </Link>
            </div>
            <div className=' w-[50px] lg:hidden'>
              <MdOutlineMenu size={30}/>
            </div>
        </div>
    </div>
      ):(
        <div className=' w-full h-[70px] flex justify-center items-center fixed bg-white shadow-md z-10'>
        <div className=' w-[95%] h-[90%] flex justify-between items-center'>
            <div className=' w-[150px] lg:w-[200px] bg-green-400 '>Logo</div>
            <div className=' w-[380px] hidden lg:flex justify-between items-center text-[18px] font-[400] cursor-pointer'>
              <nav>Features</nav>
              <nav>Pricing</nav>
              <nav>Blog</nav>
              <nav>Contact Us</nav>
            </div>
            <div className=' w-[220px] hidden lg:block text-[18px] font-[400]'>
              <Link to='/login'>
              <button className=' w-[80px] h-[40px]'>Login</button>
              </Link>
              <Link to='/register'>
              <button className=' w-[130px] h-[40px] bg-[#3b82f6] rounded-lg text-white'>Register</button>
              </Link>
            </div>
            <div className=' w-[50px] lg:hidden'>
              <MdOutlineMenu size={30}/>
            </div>
        </div>
    </div>
      )}
    </div>
  )
};

export default LandingHeader;