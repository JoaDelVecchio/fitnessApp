import Exercises from "./Exercises";
const Workouts = ({ workouts }) => {
  return (
    <div>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <div>
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <p>Duration: {workout.duration}</p>
            </div>
            <div>
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
