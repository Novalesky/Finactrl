import React from 'react'
import {useData} from '../../context/data_provider/index'

export default function RevenueDisplayFunction(){
    const {state} = useData()

    const parsedIncomings = state.incomings.map((ele)=> parseFloat(ele.value) ).reduce((add, acc)=>{return add + acc},0)
    const parsedSpendings = state.spendings.map((ele)=> parseFloat(ele.value) ).reduce((add, acc)=>{return add + acc},0)

    let revenueValue = parsedIncomings + parsedSpendings

    
    
    return(<div className="revenueContainer">
        <p>Receita</p>
        <p>R${revenueValue.toFixed(2)}</p>
    </div>)
}