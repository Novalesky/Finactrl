import React, {createContext, useContext, useReducer, useState} from 'react'



const dataContext = createContext()

const initialState = []
//lembrete: o case sempre tem que retornar algo para o state
export function reducer(state, action){
    switch(action.type){
        case 'Add':
            
            return state = [...state ,action.payload]
        case 'Del':
            
            return state = state.filter(ele => ele.id !== action.payloadId)

            default:
                console.log('ops, vc errou em algo')
            }
        }
        
export default function DataProvider ({children}){
    const [id, setId] = useState(1)
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <dataContext.Provider value={{state, dispatch, id, setId}}>
            {children}
        </dataContext.Provider>
    )
}
export function useData(){
    const context = useContext(dataContext)
    return context
}