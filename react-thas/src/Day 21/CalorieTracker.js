import React, { useState } from "react";
import "./CalorieTracker.css";
import AddFood from "./AddFood";
import FoodItem from "./FoodItem";

const CalorieTracker = () => {
  const [foods, setFoods] = useState([]);

  return (
    <div>
      <h2>Calorie Tracker</h2>
      <AddFood foods={foods} setFoods={setFoods} />
      <div className="foods-container">
        {foods.length ? (
          foods.map((elem, index) => (
            <FoodItem
              key={index}
              id={index}
              foods={foods}
              setFoods={setFoods}
            />
          ))
        ) : (
          <p>No foods consumed till now</p>
        )}
      </div>
    </div>
  );
};

export default CalorieTracker;
