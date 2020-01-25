import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import FoodList from './FoodList';
import { categoriseFood } from '../utils/helpers';

const useStyles = makeStyles({

});

const SearchDropdown = ({ food }) => {
  const classes = useStyles();
  const categorisedFood = categoriseFood(food);
  const { common, branded } = categorisedFood;
  console.log(categorisedFood);

  return (
    <Paper>
      {common.length ? <FoodList title="Common" foodList={common} /> : null}
      {common.length && branded.length ? <Divider /> : null}
      {branded.length ? <FoodList title="Branded" foodList={branded} /> : null}
    </Paper>
  );
};

export default SearchDropdown;
