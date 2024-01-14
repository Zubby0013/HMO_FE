import bg from "../../assets/shape.svg";
import pix from "../../assets/box.png";
import { MdOutlineFlashOn } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";

const Create = () => {
  const [state, setState] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);

  const toggle =()=>{
    setState(!state)
  };
  return (
    <div className=' w-full min-h-screen flex justify-center items-center bg-[#f3f5fc] py-24'>
        <div className=' w-[95%] flex justify-center items-center flex-col'>
            <div className=' w-[400px] lg:w-[600px]'>
                <h1 className=' text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-16'>Create An Appointment With A Doctor</h1>
            </div>
            <div className=' w-full min-h-[400px] grid grid-cols-1 lg:grid-cols-2'>
               <div className="relative flex items-center mb-10">
                 <img src={bg} alt="" className=" object-contain w-[90%]"/>
                 <img src={pix} alt="" className=" absolute top-14 left-8 bottom-0 w-[450px] animate-pulse rounded-lg"/>
               </div>
               <div className=" flex items-center">
                  <div className=" w-full h-[80%] flex items-center justify-center lg:items-start lg:justify-start flex-col">
                     <div className=" w-[85%] min-h-[130px]">
                         <h1 className='text-2xl md:text-3xl lg:text-[30px] font-medium mb-4'>Speed Up Decision Making</h1>
                         <p className="">
                         Get to a decision faster by bringing requests into chat. Allow your self to be first, track and resolve tickets in health.
                         </p>
                     </div>
                     <div className=" w-full min-h-[180px] mt-6 ">
                         <div className=" w-[90%] min-h-[45px] bg-white rounded-lg flex  justify-between items-center">
                            <div className=" flex gap-4">
                               <div className="mt-2 text-[#3b82f6]"><MdOutlineFlashOn size={25}/></div>
                               <div className=" text-lg font-normal">Easy to start a request</div>
                            </div>
                            
                            <div className=" cursor-pointer transition-all duration-500"
                            onClick={()=>{toggle()}}>
                              {state? <FaAngleUp size={20}/> : <FaAngleDown size={20}/>}
                            </div>
                         </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Create;