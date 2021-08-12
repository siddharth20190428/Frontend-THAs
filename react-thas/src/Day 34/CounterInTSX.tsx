import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducers";
import { addNote, deleteNote } from "./actions";
import "./Counter.css";
import { useState } from "react";

const CounterInTSX = () => {
  const [input, setInput] = useState<string>("");
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  return (
    <div className="day-34 center-page">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {!notes.length ? (
          <h2>Click on add to add notes</h2>
        ) : (
          <ul>
            {notes.map((note: string, ind: number) => (
              <li key={ind}>
                <h3>{note}</h3>
                <button onClick={() => dispatch(deleteNote(ind))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CounterInTSX;
