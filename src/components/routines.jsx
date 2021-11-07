import React, { useState, useEffect } from "react";
import { fetchAllRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  async function getRoutines() {
    try {
      const userRoutines = await fetchAllRoutines();
      setRoutines(userRoutines);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getRoutines();
  });

  return (
    <div className="RoutinesBox">
      <h1>Routines:</h1>
      {routines.map((routine) => {
        return (
          <div className="RoutineCard">
            <h3>{routine.name}</h3>
            <h5>Created by {routine.creatorName}</h5>
            <p>{routine.goal}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
