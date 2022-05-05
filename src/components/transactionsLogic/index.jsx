import React, {useState} from "react";
import {useData} from '../../context/data_provider/index'
import DelTransaction from "../delTransactionButton/index";
import ModalTransaction from "../transactionModal/index";


export default function Transactions(){
    
    const {state} = useData()
    const [isModal, setIsModal] = useState(false)
    const [data, setData] = useState({})
    
    function handleClick({target}){
        setIsModal(!isModal)
        setData(state.find(ele => ele.id === parseInt(target.id)))

    }

    const transactionList = state.map( ele => <li key={ele.id}>
        <button className='transactionButton' onClick={handleClick} id={ele.id}>
        <span className='value'> Valor: {ele.value}</span>
        <span className='disc'>Descrição: {ele.description}</span>
        <span className='id'>ID: {ele.id}</span>
        </button>
        <DelTransaction id={ele.id}/>
        </li>)   
        console.log(transactionList)
    
    
    return(
        <div>
             <ul>
                {transactionList}
            </ul>
            {isModal && <ModalTransaction transacInfo={data}/>}
        </div>

    )
}