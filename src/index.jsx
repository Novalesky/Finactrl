import React from 'react'
import ReactDOM from 'react-dom'
import DisplayValue from './components/displayValue/index'
import DataProvider from './context/data_provider/index'
import InputDataDisplay from './components/inputDataDisplay'
import IncomingDisplayFunction from './components/incomingDisplayFunction/index'


import './index.css'



function Index (){
    return(
        <main>
            <DataProvider>
                <div className ='headContainer'>
                        <DisplayValue>
                            <IncomingDisplayFunction></IncomingDisplayFunction>
                        </DisplayValue>
                        {/* <DisplayValue></DisplayValue> */}
                        {/* <DisplayValue></DisplayValue> */}
                </div>
                <div className='transactionsContainer'>

                    <InputDataDisplay></InputDataDisplay>
                </div>

            </DataProvider>
        </main>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'))