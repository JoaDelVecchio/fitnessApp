import { useState, useEffect } from "react";
import Workouts from "./components/Workouts";
import workoutServices from "./services/workoutServices.js";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    workoutServices
      .getAllWorkouts()
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching workouts", error));
  }, []);

  return loading ? (
    <div className="loading-message">You will become a beast...</div>
  ) : (
    <div className="container">
      <header>
        <h1 className="app-title">It's supposed to be hard</h1>
        <img src="logo.png" alt="logo" />
      </header>
      <Workouts workouts={workouts} />
    </div>
  );
}

export default App;
