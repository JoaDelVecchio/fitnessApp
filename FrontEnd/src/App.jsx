import { useState, useEffect } from "react";
import Workouts from "./components/Workouts";
import workoutServices from "./services/workoutServices.js";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exercisesInput, setWeightReps] = useState(() => {
    const savedInputs = localStorage.getItem("exercisesInput");
    return savedInputs
      ? JSON.parse(savedInputs)
      : [
          { id: "101", weightReps: "" },
          { id: "102", weightReps: "" },
          { id: "103", weightReps: "" },
          { id: "104", weightReps: "" },
          { id: "105", weightReps: "" },
          { id: "106", weightReps: "" },
          { id: "107", weightReps: "" },
          { id: "108", weightReps: "" },
          { id: "109", weightReps: "" },
          { id: "201", weightReps: "" },
          { id: "202", weightReps: "" },
          { id: "203", weightReps: "" },
          { id: "204", weightReps: "" },
          { id: "205", weightReps: "" },
          { id: "206", weightReps: "" },
          { id: "301", weightReps: "" },
          { id: "302", weightReps: "" },
          { id: "303", weightReps: "" },
          { id: "304", weightReps: "" },
          { id: "305", weightReps: "" },
          { id: "306", weightReps: "" },
          { id: "307", weightReps: "" },
          { id: "308", weightReps: "" },
        ];
  });

  const handleWeightReps = (e, exerciseId) => {
    const newWeightReps = e.target.value;
    setWeightReps((prevExercisesInput) =>
      prevExercisesInput.map((exerciseInput) =>
        exerciseInput.id === exerciseId
          ? { ...exerciseInput, weightReps: newWeightReps }
          : exerciseInput
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("exercisesInput", JSON.stringify(exercisesInput));
  }, [exercisesInput]);

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
      <Workouts
        workouts={workouts}
        handleWeightReps={handleWeightReps}
        exercisesInput={exercisesInput}
      />
    </div>
  );
}

export default App;
