import "./App.css";
import { Switch, Route } from "react-router-dom";
import Chess from "./Day 16/Chess";
import MemeCard from "./Day 16/MemeCard";
import CalorieList from "./Day 17/CalorieList";
import Chess1 from "./Day 18/Chess";
import CalorieList1 from "./Day 18/CalorieList";
import Box from "./Day 19/CountButtons";
import CalorieList2 from "./Day 20/CalorieList";
import CalorieTracker from "./Day 21/CalorieTracker";

import foods from "./utils/FoodData";

function App() {
  return (
    <div className="App">
      {/* <Chess /> */}
      {/* <MemeCard /> */}
      {/* <CalorieList foods={foods} /> */}
      {/* <Chess1 /> */}
      {/* <CalorieList1 foods={foods} /> */}
      {/* <CalorieList2 /> */}
      {/* <Box /> */}
      <CalorieTracker />
    </div>
  );
}

export default App;
