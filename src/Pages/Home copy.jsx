import React from 'react'
import SalonLandingPage from './SalonLandingPage'
import SalonHomePage from './SalonHomePage'
import ServicesPage from './ServicesPage'

const Home = () => {
  return (
    <div>
        <SalonLandingPage/>
        <SalonHomePage/>
        <ServicesPage/>
    </div>
  )
}

export default Home