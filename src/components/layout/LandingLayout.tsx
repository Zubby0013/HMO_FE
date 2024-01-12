import React from 'react'
import LandingHeader from '../static/LandingHeader'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div>
        <LandingHeader/>
        <Outlet/>
    </div>
  )
}

export default LandingLayout