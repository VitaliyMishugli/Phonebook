import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from 'redux/filter/filter-slice';
import { Paper, TextField, Typography } from "@mui/material";

export const Filter = () => {
  const storeFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ padding: '10px', width: '500px', margin: 'auto', backgroundColor: 'secondary.main', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <p> Find contacts by name</p> */}

      {/* <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      /> */}

      <label htmlFor="demo-helper-text-misaligned">
        <Typography variant='h4'>
          Find contacts by name
        </Typography>
       
      </label>
      <TextField
        helperText="Please enter contact name"
        id="demo-helper-text-misaligned"
        label="Name"
        type="text"
        value={storeFilter}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))} />
    </Paper>
  )
}