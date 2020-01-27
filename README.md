## WIP
Code test to build a demo nutrition/diet tracking app. 
https://nutrition-demo-app.herokuapp.com/


## Notes:
# API response structure
  - common food, use food_name value and post to nutrients endpoint to get diet details
  "common": [
        {
            "food_name": "tea",
            "serving_unit": "fl oz",
            "tag_name": "tea",
            "serving_qty": 6,
            "common_type": null,
            "tag_id": "304",
            "photo": {
                "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/304_thumb.jpg"
            },
            "locale": "en_US"
        },
  ]

  - branded food, use nix_item_id value and post to nutrients endpoint to get diet details
  "branded": [
        {
            "food_name": "Diet Green Tea, Citrus",
            "serving_unit": "bottle",
            "nix_brand_id": "51db37b2176fe9790a898523",
            "brand_name_item_name": "Lipton Diet Green Tea, Citrus",
            "serving_qty": 1,
            "nf_calories": 0,
            "photo": {
                "thumb": "https://d1r9wva3zcpswd.cloudfront.net/5be3e2729d443d933047c38d.jpeg"
            },
            "brand_name": "Lipton",
            "region": 1,
            "brand_type": 2,
            "nix_item_id": "5be3e2700ce406a76b4f1a0f",
            "locale": "en_US"
        },
  ]

  # Understanding the food calorie calculation, data needed to calculate
    - Take "chicken salad" for example:
      "serving_qty": 0.5,
      "serving_unit": "cup",
      "serving_weight_grams": 112.1,
      "nf_calories": 253.99,
      "serving_size" : 1,
    
    - That translates into:
      Two serves of Chicken Salad 0.5 cup, which is 1 cup. Rounding to integer is 224 grams and 508 calories.

    - if user enters 1.0 cup servings in app dialog, should produce 224g and 508cal as result 
      (1 / serving_qty) = serve value
      (serve value * serving_weight_grams)
      (serve value * nf_calories)

    # Storing in user intake list
      - Common food
      {
          "food_name": "slice cheese",
          "serving_qty": 1,
          "serving_unit": "slice",
          "serving_weight_grams": 28,
          "nf_calories": 113.12,
          "serving_size" : 2,
          "meal_type": "snack",
          "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
      },

      - Branded food
      {
          "nix_item_id": "598c0695306b814040ff908b",
          "food_name": "Boneless Skinless Chicken Breasts",
          "serving_unit": "oz",
          "serving_qty": 4,
          "nf_calories": 110,
          "serving_size" : 1,
          "meal_type": "dinner",
          "thumb": "https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"
      },