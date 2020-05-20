import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    marginTop: "20px",
  },
  label: {
    backgroundColor: "white",
  },
  h5: {
    color: theme.palette.text.primary,
    marginBottom: 20,
  },
}));

export const AddExpense = () => {
  const { addExpense } = useContext(GlobalContext);
  const classes = useStyles();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      text,
      qty: "",
      unit: "",
      amount: -Math.abs(amount),
    };

      addExpense(newExpense);
  };

  return (
    <>
      <Typography variant="h5" className={classes.h5}>
        Add Expense
      </Typography>
      <form className={classes.root} onSubmit={onSubmit} required>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setText(e.target.value)}
                label="Type"
                value={text}
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
            <FormControl variant="outlined" fullWidth>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                fullWidth
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Add Expense
        </Button>
      </form>
    </>
  );
};
