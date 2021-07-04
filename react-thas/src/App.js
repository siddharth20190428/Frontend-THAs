import "./App.css";
import Chess from "./Day 16/Chess";
import { Switch, Route, Redirect } from "react-router-dom";
import MemeCard from "./Day 16/MemeCard";
import CalorieList from "./Day 17/CalorieList";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Day-16/chess" component={Chess} />
        <Route exact path="/Day-16/meme-card" component={MemeCard} />
        <Redirect to="/" />
      </Switch> */}
      {/* <Chess/> */}
      {/* <MemeCard /> */}
      <CalorieList />
    </div>
  );
}

export default App;
