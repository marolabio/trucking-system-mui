import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h4: {
    marginTop: 20,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.h4}>
      Trucking System
    </Typography>
  )
}
