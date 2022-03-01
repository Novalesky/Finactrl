import React, {useReducer, useContext, createContext} from 'react'

const economyContext = createContext()

const initialValue = {incoming:[], spending:[]}

function reducer (state, action){
    switch (action.type){
        case 'incoming':
            
            return{
                ...state,
                incoming:[...state.incoming, action.payload]
            }
        default:
            break
    }
}

export default function EconomyDataControl ({children}){
    
    const[state, dispatch] = useReducer(reducer, initialValue)
    
    return(<economyContext.Provider value={{state, dispatch}}>
        {children}
    </economyContext.Provider>)
}

export function useData(){
    const context = useContext(economyContext)
    return context
}