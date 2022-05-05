import React from 'react'
import PositiveInputLogic from '../positiveInputLogic/index'
import NegativeInputLogic from '../negativeInputLogic/index';
import './index.css'
export default function InputModal({view,viewSwitcher}){
    let inputToggle = false

    switch (view) {
        case 'positive':
            inputToggle = <PositiveInputLogic/>
            break;
        
        case 'negative':
            inputToggle = <NegativeInputLogic/>
            break;
        default:
            break;
    }
    
    
    function closeModal(){
        viewSwitcher(false)
    }
    
    return(
    <div className="modalBackground">
        
        <div className='modalContainer'>
        
            <button onClick={closeModal} className="closeModal">X</button>
            {inputToggle}
        
        </div>
    </div>
)}