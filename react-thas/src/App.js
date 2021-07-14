import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Router>
        <h3 className="home-header">
          <Link to="/">Homepage</Link>
        </h3>
        <Switch>
          <Route exact path="/day16/chess" component={Chess} />
          <Route exact path="/day16/meme-card" component={MemeCard} />
          <Route
            exact
            path="/day17/"
            component={() => <CalorieList foods={foods} />}
          />
          <Route exact path="/day18/chess" component={Chess1} />
          <Route
            exact
            path="/day18/calorie-list"
            component={() => <CalorieList1 foods={foods} />}
          />
          <Route exact path="/day19/" component={Box} />
          <Route
            exact
            path="/day20/"
            component={() => <CalorieList2 foods={foods} />}
          />
          <Route exact path="/day21/" component={CalorieTracker} />
          <Route exact path="/" component={Home} />
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
