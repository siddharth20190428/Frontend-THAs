import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chess from "./Day 16/Chess";
import MemeCard from "./Day 16/MemeCard";
import CalorieList from "./Day 17/CalorieList";
import Chess1 from "./Day 18/Chess";
import CalorieList1 from "./Day 18/CalorieList";
import Box from "./Day 19/CountButtons";
import CalorieList2 from "./Day 20/CalorieList";
import CalorieTracker from "./Day 21/CalorieTracker";
import MemeGenerator from "./Day 22/MemeGenerator";
import Website from "./Day 24/Website";
import Website1 from "./Day 25/Website";
import Counter from "./Day 26/Counter";
import UserForm from "./Day 26/UserForm";
import Weather from "./Day 28/Weather";

import foods from "./utils/FoodData";
import store from "./Day 26/store";

import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route exact path="/day22/" component={MemeGenerator} />
          <Route exact path="/day24/" component={Website} />
          <Route exact path="/day25/" component={Website1} />
          <Route
            exact
            path="/day26/counter"
            component={() => (
              <Provider store={store}>
                <Counter />
              </Provider>
            )}
          />
          <Route
            exact
            path="/day26/user-form"
            component={() => (
              <Provider store={store}>
                <UserForm />
              </Provider>
            )}
          />
          <Route exact path="/day28/" component={Weather} />
          <Route exact path="/" component={Home} />
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
