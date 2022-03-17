import React from 'react'
import './index.css'

export default function DisplayValue({conditionalStyle, valueToDisplay, displayId}){
    const style = conditionalStyle <0 ? 'negative' : false
    
    return(
        <div className={ style || 'defaultStyle'}>
            <div className="svgContainer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    focusable="false">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M16 12l-4-4-4 4m4 4V8"/>
                </svg>
            </div>
            <div className="valueContainer">
                <p>{displayId}</p>
                {conditionalStyle||valueToDisplay}
                </div>
        </div>
    )
}