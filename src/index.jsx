import React from 'react'
import ReactDOM from 'react-dom'
import EconomyDataControl from './context/economyDataProvider'
import Test from './components/teste'


import './index.css'



function Index (){
    return(
    <main>
        <EconomyDataControl>
            <Test></Test>
        </EconomyDataControl>
    </main>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'))