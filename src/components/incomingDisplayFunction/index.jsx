import React from 'react'
import {useData} from '../../context/data_provider/index'

export default function IncomingDisplayFunction(){

    const {state} = useData()

    const valueDisplay = state.incomings
    .map((ele)=>{

        let newValue =  parseFloat(ele.value)
        return newValue
    }).reduce((acc, add)=>{

        return acc + add
    },0)
    
    return(
        <>
            <p>{valueDisplay.toFixed(2)}</p>
        </>
    )
}