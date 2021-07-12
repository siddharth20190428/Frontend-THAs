import React, { useState } from "react";

const AddFood = ({ foods, setFoods }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFoods([...foods, { id: foods.length, name, amount }]);
    setName("");
    setAmount(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Item Name"
        autoComplete="off"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        placeholder="Calorie Amount"
      />
      <button>Add Item</button>
    </form>
  );
};

export default AddFood;
