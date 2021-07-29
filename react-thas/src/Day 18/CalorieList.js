import React from "react";

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

const CalorieList = ({ foods }) => {
  return (
    <div className="center-page">
      <h2 className="head">Calorie Read Me</h2>
      <div className="container">
        {foods.map((elem) => (
          <CalorieCard food={elem.text} calory={elem.calory} key={elem.id} />
        ))}
      </div>
    </div>
  );
};

export default CalorieList;
