export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map((value) => 
          value.id === 1 ?
           {
            ...value, 
            text: action.payload.text,
            qty: action.payload.qty,
            unit: action.payload.unit,
            amount: action.payload.amount
           }
          : value
        )

      }

    case 'ADD_EXPENSE':
      return {
        ...state,
        transactions: [...state.transactions, action.payload,]
      }
    case 'ADD_INFORMATION':
      return {
        ...state,
        information: action.payload
      }
    default:
      return state;
  }
}