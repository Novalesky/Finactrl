import React from 'react'
import {useData} from '../../context/data_provider/index'
import DisplayValue from '../displayValue/index'

export default function IncomingDisplayFunction(){

    const {state} = useData()
    
    const valueHandle = state.incomings
    .map((ele)=>{

        let parsedValue =  parseFloat(ele.value)
        return parsedValue
    }).reduce((acc, add)=>{

        return acc + add
    },0)
    
    

    return(
        <div className="incomingContainer">
            
        </div>
    )
}