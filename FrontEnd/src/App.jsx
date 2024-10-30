import { useState, useEffect } from "react";
import Workouts from "./components/Workouts";
import workoutServices from "./services/workoutServices.js";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    workoutServices
      .getAllWorkouts()
      .then((data) => {
        setWorkouts(data), setLoading(false);
      })
      .catch((error) => console.error("Error fetching workouts", error));
  }, []);

  return loading ? (
    <div>You will become a beast...</div>
  ) : (
    <>
      <Workouts workouts={workouts} />
    </>
  );
}

export default App;
