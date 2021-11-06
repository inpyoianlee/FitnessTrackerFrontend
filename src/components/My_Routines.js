import React, { useEffect, useState } from "react";
import { createRoutine, getAllPublicRoutinesByUser, deleteRoutine } from "../api";
import { getToken } from "../auth";

const MyRoutines = ({ isLoggedIn, username }) => {
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");
  const [routineList, setRoutineList] = useState([]);
  async function getRoutines() {
    try {
      const data = await getAllPublicRoutinesByUser(username);
      setRoutineList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRoutines();
  });

  if (!getToken()) {
    return (
      <div className="myRoutines-error">
        <h3>You are not logged in!</h3>
      </div>
    );
  } else {
    return (
      <div className="myRoutines-box">
        <h3>Create a new Routine</h3>
        <form
          id="post-routine-form"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const newRoutine = await createRoutine(routineName, routineGoal);
            } catch (err) {
              throw err;
            }
          }}
        >
          <fieldset>
            <label htmlFor="routineName">Name</label>
            <input
              type="text"
              placeholder="Routine Name"
              id="routine_name"
              value={routineName}
              onChange={(e) => {
                setRoutineName(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="routineGoal">Goal</label>
            <input
              type="text"
              placeholder="Routine Goal"
              id="routine_goal"
              value={routineGoal}
              onChange={(e) => {
                setRoutineGoal(e.target.value);
              }}
            />
          </fieldset>
          <button>Submit</button>
        </form>
        <h3>Your Routines</h3>
        <div className="myRoutines-routines">
          {routineList ? (
            routineList.map((routine) => {
              return (
                <div className="single_routine">
                  <h4>Routine name: {routine.name}</h4>
                  <p>Goal: {routine.goal}</p>
                  <button 
                    className="delete-routine_button"
                    onClick={async () => {
                        try {
                            const deleteData = await deleteRoutine(routine.id);
                        } catch(err) {
                            console.error(err);
                        }
                    }}
                  >Delete</button>
                  <button
                    className='edit-routine_button'
                    
                  >Edit</button>
                </div>
              );
            })
          ) : (
            <h4>You haven't created any routines!</h4>
          )}
        </div>
      </div>
    );
  }
};
export default MyRoutines;
