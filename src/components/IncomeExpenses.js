import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

export const IncomeExpenses = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const grossIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const netIncome = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={4}>
        <Typography variant="h6">Gross Income</Typography>
        <Typography>{grossIncome}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Expense</Typography>
        <Typography color="secondary">{expense}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Net Income</Typography>
        <Typography>{netIncome}</Typography>
      </Grid>
    </Grid>
  );
};
