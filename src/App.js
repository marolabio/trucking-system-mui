import React from "react";
import { Header } from "./components/Header";
import { AddExpense } from "./components/AddExpense";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddInformation } from "./components/AddInformation";
import { GlobalProvider } from "./context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalProvider>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <IncomeExpenses />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <AddInformation />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <AddExpense />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12}>
              <Paper className={classes.paper}>
                <TransactionList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
