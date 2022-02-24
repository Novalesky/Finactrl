import React from 'react'
import './index.css'

export default function DisplayValue({children}){
    return(
        <div className='displayValueContainer'>
            {children}
        </div>
    )
}