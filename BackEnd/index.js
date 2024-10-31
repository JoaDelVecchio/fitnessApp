const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.use(cors());

let workouts = [
  {
    id: "1",
    name: "Día 1: Pecho + Espalda",
    description:
      "Enfoque en pecho y espalda, con ejercicios de alta repetición y dominadas.",
    duration: "1 hora",
    exercises: [
      {
        id: "101",
        name: "Elevaciones de pierna",
        sets: "8",
        reps: "12",
        musclesTargeted: ["Abdominales"],
      },
      {
        id: "102",
        name: "Flexiones declinadas",
        sets: "8",
        reps: "15-20",
        musclesTargeted: ["Pecho"],
      },
      {
        id: "103",
        name: "Flexiones normales",
        sets: "4",
        reps: "20",
        musclesTargeted: ["Pecho"],
      },
      {
        id: "104",
        name: "Dominadas supinas",
        sets: "4",
        reps: "8-10",
        musclesTargeted: ["Espalda", "Bíceps"],
      },
      {
        id: "105",
        name: "Dominadas pronadas",
        sets: "4",
        reps: "8-10",
        musclesTargeted: ["Espalda"],
      },
      {
        id: "106",
        name: "Remo con mancuerna",
        sets: "4",
        reps: "10-12",
        musclesTargeted: ["Espalda"],
      },
      {
        id: "107",
        name: "Vuelos laterales",
        sets: "3",
        reps: "15-20",
        musclesTargeted: ["Hombros"],
      },
      {
        id: "108",
        name: "Curl bíceps",
        sets: "3",
        reps: "12",
        musclesTargeted: ["Bíceps"],
      },
      {
        id: "109",
        name: "Flexiones agarre cerrado",
        sets: "3",
        reps: "20",
        musclesTargeted: ["Pecho", "Tríceps"],
      },
    ],
  },
  {
    id: "2",
    name: "Día 2: Piernas",
    description:
      "Entrenamiento de piernas con enfoque en fuerza y resistencia.",
    duration: "1 hora",
    exercises: [
      {
        id: "201",
        name: "Elevaciones de pierna",
        sets: "8",
        reps: "12",
        musclesTargeted: ["Abdominales"],
      },
      {
        id: "202",
        name: "Sentadilla con mancuernas (goblet)",
        sets: "4",
        reps: "10-12",
        musclesTargeted: ["Piernas"],
      },
      {
        id: "203",
        name: "Peso muerto rumano",
        sets: "4",
        reps: "10-12",
        musclesTargeted: ["Piernas", "Espalda Baja"],
      },
      {
        id: "204",
        name: "Zancadas con mancuernas",
        sets: "3",
        reps: "12 por pierna",
        musclesTargeted: ["Piernas"],
      },
      {
        id: "205",
        name: "Elevación de gemelo a una pierna",
        sets: "4",
        reps: "15-20",
        musclesTargeted: ["Pantorrillas"],
      },
      {
        id: "206",
        name: "Sentadilla búlgara",
        sets: "3",
        reps: "10-12 por pierna",
        musclesTargeted: ["Piernas"],
      },
    ],
  },
  {
    id: "3",
    name: "Día 3: Brazos + Hombro",
    description: "Ejercicios centrados en brazos y hombros para hipertrofia.",
    duration: "1 hora",
    exercises: [
      {
        id: "301",
        name: "Elevaciones de pierna",
        sets: "8",
        reps: "12",
        musclesTargeted: ["Abdominales"],
      },
      {
        id: "302",
        name: "Vuelos laterales",
        sets: "4",
        reps: "15-20",
        musclesTargeted: ["Hombros"],
      },
      {
        id: "303",
        name: "Curl de bíceps con mancuernas",
        sets: "4",
        reps: "10-12",
        musclesTargeted: ["Bíceps"],
      },
      {
        id: "304",
        name: "Curl martillo",
        sets: "4",
        reps: "10-12",
        musclesTargeted: ["Bíceps"],
      },
      {
        id: "305",
        name: "Tríceps sobre cabeza",
        sets: "4",
        reps: "12-15",
        musclesTargeted: ["Tríceps"],
      },
      {
        id: "306",
        name: "Tríceps acostado",
        sets: "4",
        reps: "12-15",
        musclesTargeted: ["Tríceps"],
      },
      {
        id: "307",
        name: "Flexiones declinadas",
        sets: "3",
        reps: "20",
        musclesTargeted: ["Pecho"],
      },
      {
        id: "308",
        name: "Dominadas supinas",
        sets: "3",
        reps: "8",
        musclesTargeted: ["Espalda", "Bíceps"],
      },
    ],
  },
];

app.get("/api/workouts", (request, response) => response.json(workouts));

app.get("/api/workouts/:workoutId", (request, response) => {
  const id = request.params.workoutId;
  const workoutSearched = workouts.find((workout) => workout.id === id);
  response.json(workoutSearched);
});

app.get("/api/workouts/:workoutId/exercises", (request, response) => {
  const id = request.params.workoutId;
  const workoutSearched = workouts.find((workout) => workout.id === id);
  response.json(workoutSearched.exercises);
});

app.get(
  "/api/workouts/:workoutId/exercises/:exerciseId",
  (request, response) => {
    const { workoutId, exerciseId } = request.params;
    const workoutSearched = workouts.find(
      (workout) => workout.id === workoutId
    );
    const exerciseSearched = workoutSearched.exercises.find(
      (exercise) => exercise.id === exerciseId
    );
    response.json(exerciseSearched);
  }
);

app.post("/api/workouts", (request, response) => {
  const { name, description, duration, exercises } = request.body;

  if (!name || !description || !duration || !exercises) {
    return response
      .status(400)
      .json({ error: "Name, description, and duration are required" });
  }

  const newWorkout = {
    id: uuidv4(),
    name,
    description,
    duration,
    exercises: exercises.map((exercise) => ({ id: uuidv4(), ...exercise })),
  };

  workouts.push(newWorkout);
  response.json(newWorkout);
});

app.put("/api/workouts/:workoutID", (request, response) => {
  const updates = request.body;
  const workoutID = request.params.workoutID;
  const workoutToUpdate = workouts.find((workout) => workout.id === workoutID);

  if (!workoutToUpdate)
    return response.status(404).json({ error: "Workout not found" });

  if (updates.name) workoutToUpdate.name = updates.name;
  if (updates.description) workoutToUpdate.description = updates.description;
  if (updates.duration) workoutToUpdate.duration = updates.duration;
  if (updates.exercises) workoutToUpdate.exercises = updates.exercises;

  response.status(200).json({ message: "Exercise updated successfully" });
});

app.put(
  "/api/workouts/:workoutId/exercises/:exerciseId",
  (request, response) => {
    const { workoutId, exerciseId } = request.params;
    const update = request.body;

    const workoutToUpdate = workouts.find(
      (workout) => workout.id === workoutID
    );
    if (!workoutToUpdate) {
      return response.status(404).json({ error: "Workout not found" });
    }

    const exerciseToUpdate = workoutToUpdate.exercises.find(
      (exercise) => exercise.id === exerciseId
    );

    if (!exerciseToUpdate) {
      return response.status(404).json({ error: "Exercise not found" });
    }

    if (exerciseToUpdate.name) exerciseToUpdate.name = update.name;
    if (exerciseToUpdate.set) exerciseToUpdate.set = update.set;
    if (exerciseToUpdate.reps) exerciseToUpdate.reps = update.reps;
    if (exerciseToUpdate.musclesTargeted)
      exerciseToUpdate.musclesTargeted = update.musclesTargeted;

    response.json(exerciseToUpdate);
  }
);

app.delete("/api/workouts/:id", (request, response) => {
  const id = request.params.id;
  workouts = workouts.filter((workout) => workout.id != id);
  response.status(200).json({ message: "Deleted successfully" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server running on ", PORT));
