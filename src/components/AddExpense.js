import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    marginTop: "20px"
  },
  label: {
    backgroundColor: "white"
  }
}));

export const AddExpense = () => {
  const classes = useStyles();
  const [text, setText] = useState('Diesel');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -Math.abs(amount)
    }

    addTransaction(newTransaction);
  }


  return (
    <>
      <h3>Add Expense</h3>
      <form className={classes.root} noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setText(e.target.value)}
                label="Type"
              >
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Allowance">Allowance</MenuItem>
                <MenuItem value="Parking">Parking</MenuItem>
                <MenuItem value="Passcard">Passcard</MenuItem>
                <MenuItem value="Sweldo">Sweldo</MenuItem>
                <MenuItem value="Tollgate">Tollgate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              fullWidth
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button className={classes.button} type="submit" variant="contained" color="secondary" onClick={() => onSubmit}>Add Expense</Button>
      </form>
    </>
  )
}
