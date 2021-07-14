import React, { useState } from "react";

const FoodItem = ({ id, foods, setFoods }) => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(foods[id].name);
  const [amount, setAmount] = useState(foods[id].amount);
  const handleUpdate = () => {
    let nFoods = [...foods];
    nFoods[id].name = name;
    nFoods[id].amount = amount;
    setFoods(nFoods);
    setOpen(false);
  };

  const handleDelete = () => {
    setFoods(foods.filter((elem, idx) => idx !== id));
  };

  return (
    <div>
      {!open ? (
        <>
          <h3>{foods[id].name}</h3>
          <p>You have consumed {foods[id].amount} calories</p>
          <button onClick={() => setOpen(true)}>Edit</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoComplete="off"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button onClick={handleUpdate}>Done</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodItem;
