import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
  date: {
    margin: 0,
  },
}));

export const AddInformation = () => {
  const { addInformation, addTransaction } = useContext(GlobalContext);
  const classes = useStyles();
  const [state, setState] = useState({
    driver: "",
    truck: "",
    box: 0,
    price: 200,
    destination: "",
    date: new Date(),
  });

  const onChange = (event) => {
    const name = event.target ? event.target.name : "date";
    const value = event.target ? event.target.value : event;
    const newState = { ...state, [name]: value };

    setState((prevState) => ({ ...prevState, [name]: value }));
    addInformation({ ...state, [name]: value });

    if (newState.price !== 0 || newState.box !== 0) {
      const newTransaction = {
        id: 1,
        text: 'Boxes',
        qty: newState.box,
        unit: newState.price,
        amount: newState.box * newState.price,
      };

      addTransaction(newTransaction);
    }
  };

  const { date, truck, destination, price, driver } = state;

  return (
    <>
      <Typography variant="h5" className={classes.h5}>
        Trucking Information
      </Typography>
      <form className={classes.root} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Driver</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={onChange}
                name="driver"
                label="Driver"
                value={driver}
              >
                <MenuItem value="Jr">Jr</MenuItem>
                <MenuItem value="Bodik">Bodik</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Destination</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={onChange}
                name="destination"
                label="Destination"
                value={destination}
              >
                <MenuItem value="Malabon">Malabon</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Truck</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={onChange}
                name="truck"
                label="Truck"
                value={truck}
              >
                <MenuItem value="EIF-251">EIF-251</MenuItem>
                <MenuItem value="WQK-766">WQK-766</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.date}
                onChange={onChange}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                inputVariant="outlined"
                id="date-picker-inline"
                label="Date"
                value={date}
                fullWidth
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Number of Boxes"
              variant="outlined"
              onChange={onChange}
              name="box"
              fullWidth
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Price per Box"
              variant="outlined"
              onChange={onChange}
              name="price"
              fullWidth
              value={price}
              type="number"
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};
