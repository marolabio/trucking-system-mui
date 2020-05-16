import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    marginTop: "20px"
  },
  label: {
    backgroundColor: "white"
  }
}));

export const AddTransaction = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [box, setBox] = useState(0);
  const [price, setPrice] = useState(0);
  const [user, setUser] = useState('');
  const [destination, setDestination] = useState('');
  const [driver, setDriver] = useState('');
  const [truck, setTruck] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: `Boxes (${box} * ${price})`,
      amount: (box * price)
    }

    addTransaction(newTransaction);
  }


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <h3>Trucking Information</h3>
      <form className={classes.root} noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">User</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setUser(e.target.value)}
                label="Type"
                value={user}
              >
                <MenuItem value="Leonida Labio">Leonida Labio</MenuItem>
                <MenuItem value="Crissel Labio">Crissel Labio</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Destination</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setDestination(e.target.value)}
                label="Destination"
                value={destination}
              >
                <MenuItem value="Malabon">Malabon</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Driver</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setDriver(e.target.value)}
                label="Driver"
                value={driver}
              >
                <MenuItem value="Jr">Jr</MenuItem>
                <MenuItem value="Bodik">Bodik</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Truck</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setTruck(e.target.value)}
                label="Truck"
                value={truck}
              >
                <MenuItem value="EIF-251">EIF-251</MenuItem>
                <MenuItem value="WQK-766">WQK-766</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-basic"
              label="Box"
              variant="outlined"
              fullWidth
              type="number"
              onChange={(e) => setBox(e.target.value)}
            />
          </Grid>


          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                inputVariant="outlined"
                id="date-picker-inline"
                label="Date"
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

        </Grid>
      </form>
    </>
  )
}
