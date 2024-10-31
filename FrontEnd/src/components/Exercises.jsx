import Exercise from "./Exercise";

const Exercises = ({ workout, exercisesInput, handleWeightReps }) => {
  return (
    <ul className="exercises-list">
      {workout.exercises.map((exercise, i) => (
        <Exercise
          handleWeightReps={handleWeightReps}
          exercise={exercise}
          exercisesInput={exercisesInput}
          key={i}
        />
      ))}
    </ul>
  );
};

export default Exercises;
