import React from "react";
import "./CalorieList.css";

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
        <CalorieCard food="Rice" calory="80" />
        <CalorieCard food="Pizza" calory="50" />
        <CalorieCard food="Chapati" calory="30" />
        <CalorieCard food="Sandwich" calory="40" />
        <CalorieCard food="Brownie" calory="50" />
        <CalorieCard food="Dish" calory="30" />
      </div>
    </div>
  );
};

export default CalorieList;
