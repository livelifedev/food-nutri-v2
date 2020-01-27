// Header helpers
export const roundToDecimal = (val) => Math.round(val * 10) / 10;

// Sidebar helpers
export const mapCalories = (arr) => {
  const map = {
    breakfastCals: 0,
    lunchCals: 0,
    dinnerCals: 0,
    snackCals: 0,
    totalCals: 0,
  };

  arr.forEach((item) => {
    if (item.meal_type === 'breakfast') map.breakfastCals += item.nf_calories;
    if (item.meal_type === 'lunch') map.lunchCals += item.nf_calories;
    if (item.meal_type === 'dinner') map.dinnerCals += item.nf_calories;
    if (item.meal_type === 'snack') map.snackCals += item.nf_calories;
    map.totalCals += item.nf_calories;
  });

  return map;
};

export const calcPercent = (value1, value2) => Math.round((value1 / value2) * 100);

// Main helpers
export const addIdToList = ((arr) => arr.map((item, index) => ({ ...item, id: index })));
