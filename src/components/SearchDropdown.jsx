import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import FoodList from './FoodList';
import FoodDialog from './FoodDialog';
import { requestFoodDetails, requestBrandedFood } from '../utils/apis';

const useStyles = makeStyles({
  dropdown: {
    maxHeight: 'calc(100vh - 85px)',
    overflowY: 'scroll',
  },
});

const SearchDropdown = ({ commonFood, brandedFood, setTodaysIntake }) => {
  const classes = useStyles();
  const [foodData, setFoodData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const commonFoodLength = commonFood.length;
  const brandFoodLength = brandedFood.length;
  const noResults = !commonFoodLength && !brandFoodLength;

  const handleOnClick = async (data) => {
    const { nix_item_id: nixItemId, food_name: foodName } = data;

    if (nixItemId) {
      const { foods } = await requestBrandedFood(nixItemId);

      setFoodData(foods[0]);
    } else {
      const { foods } = await requestFoodDetails(foodName);

      setFoodData(foods[0]);
    }
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOnSubmit = (data) => {
    const intake = {
      nix_item_id: foodData.nix_item_id,
      food_name: foodData.food_name,
      serving_qty: foodData.serving_qty,
      serving_unit: foodData.serving_unit,
      serving_weight_grams: foodData.serving_weight_grams,
      nf_calories: foodData.nf_calories,
      serving_size: data.spinner,
      meal_type: data.mealType,
      thumb: foodData.photo.thumb,
    };
    setTodaysIntake((prev) => [...prev, intake]);
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

      {foodData ? <FoodDialog open={openDialog} handleClose={handleClose} handleOnSubmit={handleOnSubmit} foodData={foodData} /> : null}
    </>
  );
};

export default SearchDropdown;
