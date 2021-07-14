import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>React THAs</h3>
      <ul className="links">
        <li>
          <Link to="/day16/chess">Day 16 (Chess Board)</Link>
        </li>
        <li>
          <Link to="/day16/meme-card">Day 16 (MemeCard)</Link>
        </li>
        <li>
          <Link to="/day17/">Day 17 (CalorieList)</Link>
        </li>
        <li>
          <Link to="/day18/chess">Day 18 (Chess Board)</Link>
        </li>
        <li>
          <Link to="/day18/calorie-list">Day 18 (CalorieList)</Link>
        </li>
        <li>
          <Link to="/day19/">Day 19 (Class component)</Link>
        </li>
        <li>
          <Link to="/day20/">Day 20 (CalorieList)</Link>
        </li>
        <li>
          <Link to="/day21/">Day 21 (CalorieTracker)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;