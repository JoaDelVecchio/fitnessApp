const Exercises = ({ workout }) => {
  return (
    <ul>
      {workout.exercises.map((exercise, i) => (
        <li key={i}>
          <p>
            <strong>Exercise:</strong> {exercise.name}
          </p>
          <p>
            <strong>Sets:</strong> {exercise.sets}
          </p>
          <p>
            <strong>Reps:</strong> {exercise.reps}
          </p>
          <p>
            <strong>Muscles Targeted:</strong>{" "}
            {exercise.musclesTargeted.join(", ")}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Exercises;
