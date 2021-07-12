import React, { useEffect, useState } from "react";
import AddFood from "./AddFood";
import FoodItem from "./FoodItem";

const CalorieTracker = () => {
  const [foods, setFoods] = useState([]);

  return (
    <div>
      <AddFood foods={foods} setFoods={setFoods} />
      {foods.map((elem) => (
        <FoodItem food={elem} foods={foods} setFoods={setFoods} />
      ))}
    </div>
  );
};

export default CalorieTracker;
