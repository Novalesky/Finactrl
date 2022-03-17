import React from 'react'
import {useData} from '../../context/data_provider/index'
import DisplayValue from '../displayValue/index'

export default function SpendingDisplayFunction(){

    const {state} = useData()
    

    const valueHandle = state.spendings
    .map((ele)=>{

        let parsedValue =  parseFloat(ele.value)
        return parsedValue
    }).reduce((acc, add)=>{

        return acc + add
    },0).toFixed(2)
    
    return(
            <DisplayValue valueToDisplay={valueHandle} displayId={'Saída'}/>
    )
}