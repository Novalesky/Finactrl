import React from 'react'
import {useData} from '../../context/data_provider/index'
import DisplayValue from '../displayValue/index'

export default function RevenueDisplayFunction(){
    const {state} = useData()

    const parsedIncomings = state.incomings.map((ele)=> parseFloat(ele.value) ).reduce((add, acc)=>{return add + acc},0)
    const parsedSpendings = state.spendings.map((ele)=> parseFloat(ele.value) ).reduce((add, acc)=>{return add + acc},0)

    const revenueValue = parsedIncomings + parsedSpendings

    
    
    return(<div className="revenueContainer">
        <DisplayValue />
    </div>)
}