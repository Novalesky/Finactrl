import React, {useState}from 'react'
import {useData} from '../../context/data_provider/index'
let idGeneretor = 0
export default function InputDataDisplay(){
    const {dispatch} = useData()
    const [newEntry, setNewEntry] = useState({})
    
    function handleChange({target}){
        const {id, value} = target
        setNewEntry({...newEntry, [id]:value })
        console.log(newEntry)
    }
    
    function handleClick(){
        
        if(!newEntry.value || !newEntry.description ){
            window.alert('Todos os campos devem ser preenchidos')
            return
        }else{
            setNewEntry(newEntry.id = ++idGeneretor)
            newEntry.value <0 ?dispatch({type:'spending', newSpending: newEntry}) : dispatch({type:'incoming', newIncoming: newEntry})
            setNewEntry('')

        }
        
    }
    
    return (
        <div>
            <input type="number" onChange={handleChange}  id='value' value = {newEntry.value || ''}></input>
            <input onChange={handleChange} id='description' value = {newEntry.description || ''}></input>
            
            <button onClick={handleClick}>Adicionar</button>
        </div>    
    )
}