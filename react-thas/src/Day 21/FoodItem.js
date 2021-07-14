import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

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
    <div className="food-card">
      {!open ? (
        <>
          <h3>{foods[id].name}</h3>
          <p>You have consumed {foods[id].amount} calories</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Edit
          </Button>
        </>
      ) : (
        <>
          <div className="edit-item">
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
              type="number"
              className="form-input"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Done
          </Button>
        </>
      )}
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default FoodItem;
