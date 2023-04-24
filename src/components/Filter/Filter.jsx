import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from 'redux/filter/filter-slice';
import { Paper } from "@mui/material";

export const Filter = () => {
  const storeFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ padding: '10px', width: '500px', margin: 'auto', backgroundColor: 'secondary.main', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        placeholder='Enter contact name or a letter'
        style={{
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid grey',
          borderRadius: '6px',
          backgroundColor: '#ebe2dd',
        }}
        value={storeFilter}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))} />

    </Paper>
  )
}