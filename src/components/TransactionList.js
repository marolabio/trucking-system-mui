import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { GlobalContext } from "../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";

import Chip from "@material-ui/core/Chip";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  h5: {
    color: theme.palette.text.primary,
    marginBottom: 10,
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export const TransactionList = () => {
  const classes = useStyles();
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const rows = transactions.map((value) => {
    return {
      id: value.id,
      desc: value.text,
      qty: value.qty,
      unit: value.unit,
      price: value.amount,
    };
  });

  const invoiceTotal = subtotal(rows);

  return (
    <>
      <Typography variant="h5" className={classes.h5}>
        Breakdown
      </Typography>

      <TableContainer>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Number of Boxes</TableCell>
              <TableCell align="right">Price per Box</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.id === 1 ? (
                    <Chip label={row.desc} />
                  ) : (
                    <Chip
                      label={row.desc}
                      clickable
                      onDelete={() => deleteTransaction(row.id)}
                      color="secondary"
                    />
                  )}
                </TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Net Income</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
