import React, { useState } from "react";

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

const CalorieList = ({ foods }) => {
  const [cards, setCards] = useState(foods);
  return (
    <div className="center-page">
      <h2 className="head">Calorie Read Me</h2>
      <div className="cal-container">
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
