// src/components/WorkoutChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const WorkoutChart = ({ workouts }) => {
  const workoutData = workouts.reduce((acc, workout) => {
    acc[workout.workoutType] = (acc[workout.workoutType] || 0) + workout.workoutMinutes;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(workoutData),
    datasets: [
      {
        label: "Minutes",
        data: Object.values(workoutData),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Workout Minutes by Type",
      },
    },
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Workout Progress</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WorkoutChart;
