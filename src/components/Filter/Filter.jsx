import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from 'redux/filter/filter-slice';

export const Filter = () => {
  const storeFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <p> Find contacts by name</p>
      <input
        type="text"
        value={storeFilter}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))} />
    </>
  )
}