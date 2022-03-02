import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import DisplayValue from './components/displayValue/index'
import DataProvider from './context/data_provider/index'
import InputDataDisplay from './components/inputDataDisplay'
import IncomingDisplayFunction from './components/incomingDisplayFunction/index'
import SpendingDisplayFunction from './components/spendingDisplayFunction/index'
import RevenueDisplayFunction from './components/revenueDisplayFunction/index'
import InputModal from './components/inputModal/index'

import './index.css'



function Index (){

    const [modalVisible, setModalVisible]=useState(false)
    const modalHandle = modalVisible && <InputModal viewSwitcher={{setModalVisible}} viewStatus={modalVisible}/> 

    function visibleHandle(){
        modalHandle? setModalVisible(false) : setModalVisible(true)
    }
    
    return(
        <main>
            <DataProvider>
                <div className ='headContainer'>
                        
                        <DisplayValue>
                            <IncomingDisplayFunction>

                            </IncomingDisplayFunction>
                        </DisplayValue>
                        
                        <DisplayValue>
                            <SpendingDisplayFunction>

                            </SpendingDisplayFunction>
                        </DisplayValue>
                        
                        <DisplayValue>
                            <RevenueDisplayFunction>

                            </RevenueDisplayFunction>
                        </DisplayValue>
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