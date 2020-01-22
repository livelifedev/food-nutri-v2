import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import FoodList from './FoodList';

const dummyArray = [1, 2, 3, 4];
const dummyArray2 = [1, 2];

const useStyles = makeStyles({

});

const SearchDropdown = () => {
  const classes = useStyles();

  return (
    <Paper>
      <FoodList title="Common" foodList={dummyArray} />
      <Divider />
      <FoodList title="Branded" foodList={dummyArray2} />
    </Paper>
  );
};

export default SearchDropdown;
