const headers = {
  'Content-Type': 'application/json',
  'x-app-id': 'de0ce94b',
  'x-app-key': '9b3909262e3eb687c907eb72099b7fed',
};

export const requestFood = async (query) => {
  const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });
  const data = await response.json();
  return data;
};

export const requestFoodDetails = async (query) => {
  const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  return data;
};
