import React from 'react'
import {useData} from '../../context/data_provider/index'

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
            <p>Entradas</p>
            <p>R${valueHandle.toFixed(2)}</p>
        </div>
    )
}