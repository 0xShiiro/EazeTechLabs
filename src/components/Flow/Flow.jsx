import React from 'react'
import './Flow.css'
import { HiArrowLongRight } from "react-icons/hi2";
import Clockicon from '../ClockIcon/Clockicon';
const Flow = ({content, time, message}) => {

    return (
        <>
        
        <div className="Flow">
                <div className="parent d-flex">
                    <div className="flow d-flex">
                        {content}
                    </div>
                    <div className="triangle">
                    </div>
                    <div className="arrowicon">
                    <HiArrowLongRight size={85} color='rgba(187, 187, 187, 1)'/>
                    </div>
                    <div className="clockicon d-flex">
                    <Clockicon/>

                    </div>
                    
                    <div className="arrowicon">
                    <HiArrowLongRight size={85} color='rgba(187, 187, 187, 1)' />
                    </div>
                </div>
                <div className="active-time">
                    <div className="row-1 d-flex">
                    </div>
                    <div className="active-time-text d-flex">
                        {time}
                    </div>
                    <div className="row-2 d-flex"></div>
                </div>
                <div className="wait-time d-flex">
                    {message}
                </div>
                <div className="line">

                </div>
            </div>
            
      
            


        </>
    )
}
export const array = {}
export default Flow
