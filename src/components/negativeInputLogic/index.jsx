import React, {useState}from 'react'
import {useData} from '../../context/data_provider/index'
import './index.css'

export default function NegativeInputLogic(){
    const {dispatch, id, setId} = useData()
    const [newEntry, setNewEntry] = useState({})
    
    // debugger
    function handleValueChange({target}){
        const {id, value} = target
        setNewEntry({...newEntry, [id]:parseInt(value < 0 ? value : value * -1) })
    }
    

    function handleDescriptionChange({target}){
        const {id, value} = target
        setNewEntry({...newEntry, [id]:value })
    }
    
    function handleClick(){
        
        if(!newEntry.value || !newEntry.description ){
            window.alert('Todos os campos devem ser preenchidos')
            return
        }else{
            setId(id+1)
            setNewEntry(newEntry.id = id)
            dispatch({type:'Add', payload: newEntry})
            setNewEntry('')

        }
        
    }
    return (
        <div className="inputContainer">
            <div className="inputFieldHandler">
            
            <input onChange={handleValueChange} autoComplete='none' type='number'  id='value' value = {newEntry.value || ''}></input>
            <input onChange={handleDescriptionChange} autoComplete='none' id='description' value = {newEntry.description || ''}></input>
            </div>
            
            <button onClick={handleClick}>Adicionar</button>
        </div>    
    )
}