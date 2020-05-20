import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: 'Boxes',
      qty: '',
      unit: '',
      amount: 0
    }
  ],
  information: {}
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  }

  function addInformation(information) {
    dispatch({
      type: 'ADD_INFORMATION',
      payload: information
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    information: state.information,
    deleteTransaction,
    addTransaction,
    addExpense,
    addInformation
  }}>
    {children}
  </GlobalContext.Provider>);
}