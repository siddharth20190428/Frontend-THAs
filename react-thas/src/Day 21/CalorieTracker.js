import React, { useState } from "react";
import AddFood from "./AddFood";
import FoodItem from "./FoodItem";

const CalorieTracker = () => {
  const [foods, setFoods] = useState([]);

  return (
    <div>
      <AddFood foods={foods} setFoods={setFoods} />
      {foods.map((elem, index) => (
        <FoodItem key={index} id={index} foods={foods} setFoods={setFoods} />
      ))}
    </div>
  );
};

export default CalorieTracker;
