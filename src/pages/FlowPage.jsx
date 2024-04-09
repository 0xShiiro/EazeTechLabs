import React, { useState } from 'react'
import './FlowPage.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Flow from '../components/Flow/Flow'
import Modal from '../components/Modal/Modal'

import { FiPlusSquare } from "react-icons/fi";


const FlowPage = () => {
    const [Formdata, setFormdata] = useState({
        title: '',
        activeTime: '',
        waitTime: ''
    });
    const [ModalOpen, setModalOpen] = useState(false);
    const form = [
        {
            title: 'Title',
            activeTime: 'Active Time',
            waitTime: 'Wait Time'
        },
        {
            title: 'Title',
            activeTime: 'Active Time',
            waitTime: 'Wait Time'
        },
        {
            title: 'Title',
            activeTime: 'Active Time',
            waitTime: 'Wait Time'
        }
    ];

    const handleChange = (event) => {
        const { title, value } = event.target;
        setFormdata({ ...Formdata, [title]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const { title, activeTime, waitTime } = Formdata;


        const formObject = {
            title,
            activeTime,
            waitTime
        };
        form.push(formObject)
        setModalOpen(false);
    };
    const HandleModalClick = () => {
        if (!ModalOpen) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    }
    return (

        <>
            <div className="Flow-page d-flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="flow-page-text ">
                    <div className="flow-page-text-1">
                        Active Time
                    </div>
                    <div className="flow-page-text-2">
                        Wait Time
                    </div>
                </div>
                <div className="flow-page-part ">
                    <Navbar />
                    <div className="flow-part-content d-flex">

                        <div className="flow-part d-flex">

                            {!(form.length === 0) && form.map((
                                data
                            ) => {
                                return (
                                    <Flow
                                        content={data.title}
                                        time={data.activeTime}
                                        message={data.waitTime}
                                    />)
                            })}
                        </div>
                        <div className="add-flow d-flex">
                            <FiPlusSquare onClick={() => { setModalOpen(true) }} size={65} color='rgba(187, 187, 187, 1)' />
                        </div>
                    </div>
                    {ModalOpen && <Modal HandleModalClick={HandleModalClick} HandleSubmit={handleSubmit} handleChange={handleChange} Formdata={Formdata} />}
                    <div className="flow-bottom-content d-flex justify-content-around">
                        <div className="flow-bottom-content-1">
                            Flow time = 47 Days
                        </div>
                        <div className="flow-bottom-content-2">
                            Total Active time = 5 Days
                        </div>
                        <div className="flow-bottom-content-3">
                            Flow Efficiency = 11%
                        </div>
                    </div>
                    <button className='savebtn' type="button">Save</button>
                </div>
            </div>
        </>
    )
}

export default FlowPage
