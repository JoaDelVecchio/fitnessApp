const Exercise = ({ exercise }) => {
  return (
    <li className="exercise-item">
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
        <strong>Muscles Targeted:</strong> {exercise.musclesTargeted.join(", ")}
      </p>
    </li>
  );
};

export default Exercise;
