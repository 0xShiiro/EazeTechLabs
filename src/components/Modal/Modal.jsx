import React, { useState } from 'react'
import './Modal.css'
import { MdCancel } from "react-icons/md";
const Modal = ({HandleModalClick,HandleSubmit,handleChange,Formdata}) => {
return (
    <>
         <div className="modalbackground d-flex">
            <div className="modalcontainer">
                <div className="modal-close-button d-flex">
                <MdCancel onClick={()=>{
                        HandleModalClick(false)
                    }} size={40} style={{
                        color: '#e31616',
                      }}/>
                </div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="modal-input form-control" value={Formdata.title} handleChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Active Time</label>
                        <input type="text" class=" modal-input form-control" value={Formdata.activeTime} handleChange={handleChange} id="exampleInputPassword1" placeholder="Active time" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Wait Time</label>
                        <input type="text" class="modal-input form-control" value={Formdata.waitTime} handleChange={handleChange} id="exampleInputPassword1" placeholder="Wait Time" />
                    </div>
                    <div className="submit-button">
                    <button type="submit" class="btn " onClick={HandleSubmit} >Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
)
}

export default Modal
