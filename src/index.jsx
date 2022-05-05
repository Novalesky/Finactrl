import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import DataProvider from './context/data_provider/index'
import DisplayValuesLogic from './components/displayValuesLogic/index'
import DisplayPositiveValues from './components/displayPositiveValues/index'
import DisplayNegativeValues from './components/displayNegativeValues/index'
import DisplayRevenueValues from './components/displayRevenue/index'
import InputModal from './components/inputModal/index'
import Transactions from './components/transactionsLogic/index'

import './index.css'



function Index (){

    const [modalVisible, setModalVisible]=useState(false)
    const modalHandle = <InputModal view={modalVisible} viewSwitcher={setModalVisible}/> 
    
    return(
        <main>
            <DataProvider>
                <div className ='headContainer'>
                    <div className="displayersContainer">
               
                        <DisplayValuesLogic>
                            {(balance)=>{return <DisplayPositiveValues className='displayButton' viewSwitcher={setModalVisible} balance={balance}/>}}
                        </DisplayValuesLogic>
                        <DisplayValuesLogic>
                            {(balance)=>{return <DisplayNegativeValues  className='displayButton' viewSwitcher={setModalVisible} balance={balance}/>}}
                        </DisplayValuesLogic>
                        <DisplayValuesLogic>
                            {(balance)=>{return <DisplayRevenueValues className='displayButton' viewSwitcher={setModalVisible} balance={balance}/>}}
                        </DisplayValuesLogic>
                        {modalVisible && modalHandle}
               
                    </div>
                </div>

                <div className='transactionsContainer'>

                    <Transactions></Transactions>

                </div>

            </DataProvider>
        </main>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'))