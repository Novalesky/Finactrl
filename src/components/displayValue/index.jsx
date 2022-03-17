import React from 'react'
import './index.css'


export default function DisplayValue({conditionalStyle}){
    const style = conditionalStyle <0 ? 'true' : false
    return(
        <div className={ style || 'defaultStyle'}>
            
        </div>
    )
}