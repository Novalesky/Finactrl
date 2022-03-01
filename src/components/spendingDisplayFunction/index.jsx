import React from 'react'
import {useData} from '../../context/data_provider/index'

export default function SpendingDisplayFunction(){

    const {state} = useData()
    

    const valueHandle = state.spendings
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