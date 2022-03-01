import React from 'react'
import {useData} from '../../context/data_provider/index'

export default function IncomingDisplayFunction(){

    const {state} = useData()
    console.log(`${state.incomings.value} esse aqui é o state`)

    const valueHandle = state.incomings
    .map((ele)=>{

        let parsedValue =  parseFloat(ele.value)
        return parsedValue
    }).reduce((acc, add)=>{

        return acc + add
    },0)
    
    return(
        <>
            <p>{valueHandle.toFixed(2)}</p>
        </>
    )
}