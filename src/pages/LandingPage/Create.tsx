import bg from "../../assets/shape.svg";
import pix from "../../assets/box.png";
import { MdOutlineFlashOn } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import DropDown from "./DropDown";
import { HiMiniFolderOpen } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";

const Create = () => {
  
  return (
    <div className=' w-full min-h-screen flex justify-center items-center bg-[#f3f5fc] py-24'>
        <div className=' w-[95%] flex justify-center items-center flex-col'>
            <div className=' :w-[380px] lg:w-[600px]'>
                <h1 className=' text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-16'>Create An Appointment With A Doctor</h1>
            </div>
            <div className=' w-full min-h-[400px] grid grid-cols-1 lg:grid-cols-2'>
               <div className="relative flex items-center mb-16 lg:mb-0">
                 <img src={bg} alt="" className=" object-contain w-auto"/>
                 <img src={pix} alt="" className=" absolute top-14 left-8 bottom-0 w-[400px] lg:w-[450px] animate-pulse rounded-lg"/>
               </div>
               <div className=" flex items-center">
                  <div className=" w-full h-[80%] flex items-center justify-center lg:items-start lg:justify-start flex-col">
                     <div className=" w-[85%] min-h-[130px] mb-8 lg:mb-0">
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
            </div>
        </div>
    </div>
  )
};

export default Create;