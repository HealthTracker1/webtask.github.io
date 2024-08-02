// src/components/WorkoutForm.js
import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [userName, setUserName] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [workoutMinutes, setWorkoutMinutes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ userName, workoutType, workoutMinutes: Number(workoutMinutes) });
    setUserName("");
    setWorkoutType("");
    setWorkoutMinutes("");
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <select
        value={workoutType}
        onChange={(e) => setWorkoutType(e.target.value)}
        required
      >
        <option value="">Select Workout Type</option>
        <option value="Running">Running</option>
        <option value="Cycling">Cycling</option>
        <option value="Swimming">Swimming</option>
        <option value="Yoga">Yoga</option>
        <option value="Weightlifting">Weightlifting</option>
      </select>
      <input
        type="number"
        placeholder="Minutes"
        value={workoutMinutes}
        onChange={(e) => setWorkoutMinutes(e.target.value)}
        required
        min="1"
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
