import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const AddFood = ({ foods, setFoods }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFoods([...foods, { name, amount }]);
    setName("");
    setAmount(0);
  };
  return (
    <form onSubmit={handleSubmit} className="add-food-form">
      <TextField
        id="standard-basic"
        label="Food"
        type="text"
        className="form-input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Item Name"
        autoComplete="off"
      />
      <TextField
        id="standard-basic"
        label="Calorie Amount"
        className="form-input"
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Item
      </Button>
    </form>
  );
};

export default AddFood;
