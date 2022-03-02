import React from 'react'
import InputDataDisplay from '../inputDataDisplay/index'
import './index.css'
export default function InputModal({viewSwitcher}){
    const {setModalVisible} = viewSwitcher
    
    function closeModal(){
        setModalVisible(false)
    }
    
    return(
    <div className="modalBackground">
        
        <div className='modalContainer'>
        
            <button onClick={closeModal} className="closeModal">X</button>
            <InputDataDisplay/>
        </div>
    </div>
)}