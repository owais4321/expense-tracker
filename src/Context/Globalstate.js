import { createContext, useReducer } from 'react';
import AppReducer from '../Reducers/AppReducer';
const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    function addT(transaction){
        dispatch({
            type:'ADDTRANSACTION',
            payload: transaction
        })
    }

    function deleteT(id){
        dispatch({
            type: 'DELETETRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addT,
            deleteT
        }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
