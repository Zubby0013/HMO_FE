import React, { FC, useState } from "react";
import {iData} from "./InterFace.ts"

const  DropDown:FC<iData> =({icon,text,text2,icon2,icon3})=> {
    const [state, setState] = useState<boolean>(false);
    const [drop, setDrop] = useState<boolean>(false);
  
    const toggle2 =()=>{
      setDrop(!drop)
      setState(!state)
    };
  
    return <div className=" w-[90%]  bg-white rounded-lg py-3 px-2 hover:cursor-pointer group-hover:[transition-all duration-500]"
      onClick={() => { toggle2(); } }>
      <div className=" flex justify-between items-center">
        <div className=" flex gap-4 items-center">
          <div className="mt-2 text-[#3b82f6]">{icon}</div>
          <div className=" text-[17px] font-normal hover:scale-110 hover:text-[15px] transition-all duration-500">{text}</div>
        </div>
  
        <div className=" cursor-pointer ">
          {state ? icon2 : icon3}
        </div>
      </div>
      {drop ? <div className=" w-[85%] min-h-[50px] ml-[43px] my-2 py-4">
        <p className=" text-sm md:text-base lg:text-lg font-normal lg:font-medium text-gray-700">
          {text2}
        </p>
      </div> : null}
    </div>;
  };

  export default DropDown;