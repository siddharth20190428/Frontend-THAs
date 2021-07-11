import React from "react";
import "./CalorieList.css";

const CalorieCard = ({ food, calory }) => {
  return (
    <div className="food">
      <h2>{food || "Myfood"}</h2>
      <p>you have consumed {calory} calory today</p>
      {calory > 80 && (
        <p>
          <span style={{ color: "red" }}>Caution!!</span>
          This food contains high calorific value
        </p>
      )}
    </div>
  );
};

const CalorieList = () => {
  return (
    <div>
      <h2 className="head">Calorie Read Me</h2>
      <div className="container">
        <CalorieCard food="Rice" calory="90" />
        <CalorieCard food="Chapati" calory="30" />
        <CalorieCard food="Sandwich" calory="40" />
        <CalorieCard food="Pizza" calory="100" />
        <CalorieCard food="Brownie" calory="85" />
        <CalorieCard food="Dish" calory="30" />
      </div>
    </div>
  );
};

export default CalorieList;
