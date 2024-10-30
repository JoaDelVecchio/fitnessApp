import Exercise from "./Exercise";

const Exercises = ({ workout }) => {
  return (
    <ul className="exercises-list">
      {workout.exercises.map((exercise, i) => (
        <Exercise exercise={exercise} key={i} />
      ))}
    </ul>
  );
};

export default Exercises;
