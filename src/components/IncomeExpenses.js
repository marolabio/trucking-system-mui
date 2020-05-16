import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const grossIncome = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const netIncome = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <h4>Gross Income</h4>
        <p className="money plus">{grossIncome}</p>
      </Grid>
      <Grid item xs={4}>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </Grid>
      <Grid item xs={4}>
        <h4>Net Income</h4>
        <p className="money plus">{netIncome}</p>
      </Grid>
    </Grid>
  )
}
