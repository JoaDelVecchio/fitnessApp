import axios from "axios";

const baseUrl = "https://fitnessapp-nh5b.onrender.com";

const getAllWorkouts = () => {
  return axios
    .get(`${baseUrl}/api/workouts`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error getting the workouts", error);
      throw error;
    });
};

const createWorkout = (newWorkout) => {
  return axios
    .post(`${baseUrl}/api/workouts`, newWorkout)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating new workout", error);
      throw error;
    });
};
const updateWorkout = (id, newObject) => {
  return axios
    .put(`${baseUrl}/api/workouts/${id}`, newObject)
    .then((response) => response.data)
    .catch((error) => {
      console.error("error updating workout", error);
      throw error;
    });
};

const updateExercise = (workoutId, exerciseId, newObject) => {
  return axios
    .put(
      `${baseUrl}/api/workouts/${workoutId}/exercises/${exerciseId}`,
      newObject
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error("error updating exercise", error);
      throw error;
    });
};

export default { getAllWorkouts, createWorkout, updateWorkout, updateExercise };
