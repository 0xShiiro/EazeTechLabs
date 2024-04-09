import React from 'react'
import './HomePage.css'

import Sidebar from '../components/Sidebar/Sidebar';
import TextCarousel from '../components/TextCarousel/TextCarousel';
import VideoPart from '../components/VideoPart/Videopart';
const HomePage = () => {
  return (
    <>
        <div className="home-page d-flex">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="textcarousel">
                <TextCarousel/>
            </div>
            <div className="videopart">
                <VideoPart/>
            </div>
        </div> 
    </>
  )
}

export default HomePage
