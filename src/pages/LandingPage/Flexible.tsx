import DropDown from './DropDown';
import { MdOutlineFlashOn } from 'react-icons/md';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import { HiMiniFolderOpen } from 'react-icons/hi2';
import { IoCheckmarkCircle } from 'react-icons/io5';
import bg from "../../assets/shape.svg";
import pix from "../../assets/box.png";

const Flexible = () => {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center bg-[#f3fbfc] py-24 px-6'>
        <div className=' w-[95%]'>
        <div className=' w-full min-h-[400px] grid grid-cols-1 lg:grid-cols-2'>
               <div className=" flex items-center">
                  <div className=" w-full h-[80%] flex items-center justify-center lg:items-start lg:justify-start flex-col">
                     <div className=" w-[85%] min-h-[130px] mb-16">
                         <h1 className='text-2xl md:text-3xl lg:text-[30px] font-medium mb-4'>Speed Up Decision Making</h1>
                         <p className="">
                         Get to a decision faster by bringing requests into chat. Allow your self to be first, track and resolve tickets in health.
                         </p>
                     </div>
                     <div className=" w-full min-h-[180px] mt-6 flex justify-between flex-col gap-4 items-center lg:items-start">
                         <DropDown icon={<MdOutlineFlashOn/>} text="Easy to start a request" icon2={<FaAngleUp/>} icon3={<FaAngleDown/>} text2="Kick-off your request in Slack by choosing the appropriate workflow. Wrangle’s intake form ensures the assignee has all the relevant information to review"/>
                         <DropDown icon={<HiMiniFolderOpen/>} text="Set Agenda by yourself" icon2={<FaAngleUp/>} icon3={<FaAngleDown/>} text2="HMO expedites ticketing by creating requests to the doctor . User receive an alert in a notification thread when the ticket is created."/>
                         <DropDown icon={<IoCheckmarkCircle/>} text="Aprrove or deny with a single click" icon2={<FaAngleUp/>} icon3={<FaAngleDown/>} text2="No need to login to another application to approve or deny a request. Tickets can be approved or denied with a single click."/>
                     </div>
                  </div>
               </div>
               <div className="relative flex items-center mb-10 lg:mb-0">
                 <img src={bg} alt="" className=" object-contain w-[90%]"/>
                 <img src={pix} alt="" className=" absolute top-14 left-8 bottom-0 w-[450px] animate-pulse rounded-lg"/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Flexible;