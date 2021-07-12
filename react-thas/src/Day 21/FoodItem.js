import React, { useState } from "react";

const FoodItem = ({ food, foods, setFoods }) => {
  const [open, setOpen] = useState(false);

  const [curr, setCurr] = useState(food);
  const [name, setName] = useState(curr.name);
  const [amount, setAmount] = useState(curr.amount);
  const handleUpdate = () => {
    setCurr({ ...curr, name, amount });
    foods.map((elem) => {
      console.log(foods.length);
      if (elem.id === curr.id) {
        elem = { ...curr };
        console.log(elem.id);
      }
    });
    // setFoods(
    //   foods.map((elem) => {
    //     if (elem.id === curr.id) {
    //       elem = curr;
    //     }
    //   })
    // );
    setOpen(false);
  };

  const handleDelete = () => {
    setFoods(foods.filter((elem) => elem.id !== curr.id));
  };

  return (
    <div>
      {open === false ? (
        <>
          <h3>{curr.name}</h3>
          <p>You have consumed {curr.amount} calories</p>
          <button onClick={setOpen(true)}>Edit</button>
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
