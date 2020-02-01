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
    const calories = item.nf_calories * item.serving_size;
    if (item.meal_type === 'breakfast') map.breakfastCals += calories;
    if (item.meal_type === 'lunch') map.lunchCals += calories;
    if (item.meal_type === 'dinner') map.dinnerCals += calories;
    if (item.meal_type === 'snack') map.snackCals += calories;
    map.totalCals += calories;
  });

  return map;
};

export const calcPercent = (value1, value2) => Math.round((value1 / value2) * 100);

// Main helpers
export const addIdToList = ((arr) => arr.map((item, index) => ({ ...item, id: index })));
