import "./App.css";
import { Switch, Route } from "react-router-dom";
import Chess from "./Day 16/Chess";
import MemeCard from "./Day 16/MemeCard";
import CalorieList from "./Day 17/CalorieList";
import Chess1 from "./Day 18/Chess";
import CalorieList1 from "./Day 18/CalorieList";
import CalorieList2 from "./Day 20/CalorieList";

function App() {
  return (
    <div className="App">
      {/* <Chess /> */}
      {/* <MemeCard /> */}
      {/* <CalorieList /> */}
      {/* <Chess1 /> */}
      {/* <CalorieList1 /> */}
      <CalorieList2 />
    </div>
  );
}

export default App;
