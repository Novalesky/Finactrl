import React from 'react'
import {useData} from '../context/economyDataProvider'
export default function Test(){
    const {state, dispatch} = useData()

    function handleDispatch(){
        dispatch({type:'incoming', payload:'fine'})
    }

    console.log(state)
    return(<div>
            <button onClick={handleDispatch} >dispatch</button>
        </div>)
}