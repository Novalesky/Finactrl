import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import DataProvider from './context/data_provider/index'
import IncomingDisplayFunction from './components/incomingDisplayFunction/index'
import SpendingDisplayFunction from './components/spendingDisplayFunction/index'
import RevenueDisplayFunction from './components/revenueDisplayFunction/index'
import InputModal from './components/inputModal/index'

import './index.css'



function Index (){

    const [modalVisible, setModalVisible]=useState(false)
    const modalHandle = modalVisible && <InputModal viewSwitcher={{setModalVisible}} /> 

    function visibleHandle(){
        modalHandle? setModalVisible(false) : setModalVisible(true)
    }
    
    return(
        <main>
            <DataProvider>
                <div className ='headContainer'>
                    <RevenueDisplayFunction/>
                        
                        
                </div>
                <div className='transactionsContainer'>
                    {modalHandle}
                    <button onClick={visibleHandle}>X</button>
                </div>

            </DataProvider>
        </main>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'))