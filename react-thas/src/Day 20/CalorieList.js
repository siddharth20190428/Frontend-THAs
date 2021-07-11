import React, { useState } from "react";
import "./CalorieList.css";

const CalorieCard = ({ card, cards, setCards }) => {
  return (
    <div className="food">
      <h2>{card.name || "Myfood"}</h2>
      <p>you have consumed {card.calory} calory today</p>
      <button
        onClick={() => {
          setCards(cards.filter((elem) => elem.id !== card.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

const CalorieList = () => {
  const foods = [
    {
      id: 1,
      name: "Pizza",
      calory: 50,
    },
    {
      id: 2,
      name: "Chapati",
      calory: 30,
    },
    {
      id: 3,
      name: "Sandwich",
      calory: 40,
    },
    {
      id: 4,
      name: "Brownie",
      calory: 50,
    },
    {
      id: 5,
      name: "Dish",
      calory: 30,
    },
    {
      id: 6,
      name: "Rice",
      calory: 80,
    },
  ];
  const [cards, setCards] = useState(foods);
  return (
    <div>
      <h2 className="head">Calorie Read Me</h2>
      <div className="container">
        {cards.length === 0 ? (
          <p>No Items available</p>
        ) : (
          cards.map((elem) => {
            return (
              <CalorieCard
                card={elem}
                cards={cards}
                setCards={setCards}
                key={elem.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CalorieList;
