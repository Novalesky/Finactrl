import React from 'react'
import {useData} from '../../context/data_provider/index'

export default function DisplayValuesLogic({children}){

    const {state} = useData()
    
    const incoming = state.filter(ele => {return ele.value > 0}).reduce((acc, add)=>{return acc+add.value},0)
    const spending = state.filter(ele => {return ele.value < 0}).reduce((acc, add)=>{return acc+add.value},0)
    const balance = {incoming , spending, revenue:(incoming+spending)}
    
    // debugger
    
    
    return( <div>
        {children(balance)}
        </div> )
}