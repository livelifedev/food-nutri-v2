import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import FoodList from './FoodList';

const useStyles = makeStyles({
  dropdown: {
    maxHeight: 'calc(100vh - 85px)',
    overflowY: 'scroll',
  },
});

const SearchDropdown = ({ commonFood, brandedFood }) => {
  const classes = useStyles();
  const commonFoodLength = commonFood.length;
  const brandFoodLength = brandedFood.length;
  const noResults = !commonFoodLength && !brandFoodLength;

  return (
    <Paper className={classes.dropdown}>
      {noResults ? <FoodList title="No Results" foodList={[]} /> : null}
      {commonFoodLength ? <FoodList title="Common" foodList={commonFood} /> : null}
      <Divider />
      {brandFoodLength ? <FoodList title="Branded" foodList={brandedFood} /> : null}
    </Paper>
  );
};

export default SearchDropdown;
