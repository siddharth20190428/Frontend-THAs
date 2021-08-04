import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions/index";

const Form = () => {
  const theme = useSelector((state) => state.theme);
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 form">
          <input
            className="mx-4"
            type="text"
            value={place}
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className={`btn ${theme ? "btn-light" : "btn-dark"}`}
            onClick={() => dispatch(updatePlaceData(place))}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
