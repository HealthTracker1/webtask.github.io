// src/components/SearchFilter.js
import React, { useState } from "react";

const SearchFilter = ({ workouts, setWorkouts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredWorkouts = workouts.filter((workout) =>
      workout.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setWorkouts(filteredWorkouts);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by user name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
