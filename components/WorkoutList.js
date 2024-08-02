// src/components/WorkoutList.js
import React from "react";

const WorkoutList = ({ workouts }) => {
  return (
    <ul className="workout-list">
      {workouts.map((workout, index) => (
        <li key={index} className="workout-list-item">
          <span>
            <strong>{workout.userName}</strong> - {workout.workoutType}
          </span>
          <span>{workout.workoutMinutes} minutes</span>
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
