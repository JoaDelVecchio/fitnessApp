const Exercise = ({ exercise, exercisesInput, handleWeightReps }) => {
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
      <div>
        <p>
          <strong>Weight/Reps done:</strong>
          <input
            className="inputWeightReps"
            type="text"
            value={
              exercisesInput.find((input) => input.id === exercise.id)
                .weightReps
            }
            onChange={(e) => handleWeightReps(e, exercise.id)}
          />
        </p>
      </div>
    </li>
  );
};

export default Exercise;
