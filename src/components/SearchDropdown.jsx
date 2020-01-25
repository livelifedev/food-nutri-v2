import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import FoodList from './FoodList';

const useStyles = makeStyles({

});

const SearchDropdown = ({ commonFood, brandedFood }) => {
  const classes = useStyles();

  return (
    <Paper>
      {commonFood.length ? <FoodList title="Common" foodList={commonFood} /> : null}
      {commonFood.length && brandedFood.length ? <Divider /> : null}
      {brandedFood.length ? <FoodList title="Branded" foodList={brandedFood} /> : null}
    </Paper>
  );
};

export default SearchDropdown;
