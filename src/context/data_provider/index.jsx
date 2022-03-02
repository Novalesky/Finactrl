import React, {createContext, useContext, useReducer} from 'react'

const dataContext = createContext()

const initialState =  {incomings:[],spendings:[]}

export function reducer(state, action){
    switch(action.type){
        case 'incoming':
            return {
                ...state,
                incomings: [...state.incomings, action.newIncoming]}
        case 'spending':
            return{
                ...state,
                spendings:[...state.spendings, action.newSpending]}
        default:
            console.log('ops, vc errou em algo')
    }
}

export default function DataProvider ({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <dataContext.Provider value={{state, dispatch}}>
            {children}
        </dataContext.Provider>
    )
}
export function useData(){
    const context = useContext(dataContext)
    return context
}