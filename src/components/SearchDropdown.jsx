import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import FoodList from './FoodList';
import FoodDialog from './FoodDialog';

const useStyles = makeStyles({
  dropdown: {
    maxHeight: 'calc(100vh - 85px)',
    overflowY: 'scroll',
  },
});

const SearchDropdown = ({ commonFood, brandedFood }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(true);
  const commonFoodLength = commonFood.length;
  const brandFoodLength = brandedFood.length;
  const noResults = !commonFoodLength && !brandFoodLength;

  const handleOnClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Paper className={classes.dropdown}>
        {noResults ? <FoodList title="No Results" foodList={[]} /> : null}
        {commonFoodLength ? <FoodList title="Common" foodList={commonFood} handleOnClick={handleOnClick} /> : null}
        <Divider />
        {brandFoodLength ? <FoodList title="Branded" foodList={brandedFood} handleOnClick={handleOnClick} /> : null}
      </Paper>

      <FoodDialog open={openDialog} handleClose={handleClose} />
    </>
  );
};

export default SearchDropdown;
