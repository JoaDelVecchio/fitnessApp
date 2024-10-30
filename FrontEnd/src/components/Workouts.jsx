import Exercises from "./Exercises";

const Workouts = ({ workouts }) => {
  return (
    <div className="workouts-wrapper">
      <ul className="workouts-list">
        {workouts.map((workout) => (
          <li key={workout.id} className="workout-item">
            <div className="workout-header">
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <p>Duration: {workout.duration}</p>
            </div>
            <div className="exercises-section">
              <h4>Exercises:</h4>
              <Exercises workout={workout} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
