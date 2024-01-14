import React from 'react'
import LandingHeader from '../static/LandingHeader'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div>
        <div className=' w-full h-[70px]'>
        <LandingHeader/>
        </div>
        <Outlet/>
    </div>
  )
}

export default LandingLayout