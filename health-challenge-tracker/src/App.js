// src/App.js
import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import SearchFilter from "./components/SearchFilter";
import Pagination from "./components/Pagination";
import WorkoutChart from "./components/WorkoutChart";
import './App.css'; // Import the CSS file

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [workoutsPerPage] = useState(5);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Health Challenge Tracker</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <SearchFilter workouts={workouts} setWorkouts={setWorkouts} />
      <WorkoutList workouts={currentWorkouts} />
      <Pagination
        workoutsPerPage={workoutsPerPage}
        totalWorkouts={workouts.length}
        paginate={paginate}
      />
      <WorkoutChart workouts={workouts} />
    </div>
  );
};

export default App;
