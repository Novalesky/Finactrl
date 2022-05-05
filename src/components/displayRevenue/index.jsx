import React from 'react'

export default function displayRevenueValues({balance}){
        const revenueSign = balance.revenue >= 0 ? 'positiverevenueDisplay' : 'negativerevenueDisplay'
    return(
        
        <div className={revenueSign} >

            <div className="arrow">


            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                focusable="false">
             
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 12l-4-4-4 4m4 4V8"/>
            </svg>
            <p>Saldo</p>
            </div>


            {balance.revenue.toFixed(2)}
            </div>
    )
}