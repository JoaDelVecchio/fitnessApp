import Exercises from "./Exercises";

const Workouts = ({ workouts, exercisesInput, handleWeightReps }) => {
  return (
    <div className="workouts-wrapper">
      <ul className="workouts-list">
        {workouts.map((workout) => (
          <li key={workout.id} className="workout-item">
            <div className="workout-header">
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <p>Duración: {workout.duration}</p>
            </div>
            <div className="exercises-section">
              <h4>Exercises:</h4>
              <Exercises
                workout={workout}
                exercisesInput={exercisesInput}
                handleWeightReps={handleWeightReps}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
