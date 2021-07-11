import React from "react";
import foods from "../utils/FoodData";

const CalorieCard = ({ food, calory }) => {
  return (
    <div className="food">
      <h2>{food || "Myfood"}</h2>
      <p>you have consumed {calory} calory today</p>
    </div>
  );
};

const CalorieList = () => {
  return (
    <div>
      <h2 className="head">Calorie Read Me</h2>
      <div className="container">
        {foods.map((elem) => (
          <CalorieCard food={elem.name} calory={elem.calory} key={elem.id} />
        ))}
      </div>
    </div>
  );
};

export default CalorieList;
