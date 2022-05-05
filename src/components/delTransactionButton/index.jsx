import React from 'react'
import {useData} from '../../context/data_provider/index'

export default function DelTransaction({id}) {
    const {dispatch} = useData()
    
    function handleClick(){
        dispatch({type:'Del', payloadId:id})
    }
    return (
    <button onClick={handleClick}>X</button>
  )
}
