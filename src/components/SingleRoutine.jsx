import react, { useEffect, useState } from "react";
import {
  editRoutine,
  fetchAllActivities,
  createRoutineActivity,
  deleteRoutineActivity,
} from "../api";
import SingleActivity from "./SingleActivity";

const SingleRoutine = ({ name, goal, id, activities, isPublic }) => {
  const [edit, setEdit] = useState(false);
  const [newGoal, setNewGoal] = useState(goal);
  const [newName, setNewName] = useState(name);
  const [activitiesList, setActivitiesList] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const [newActivityId, setNewActivityId] = useState(0);
  const [newActivityCount, setNewActivityCount] = useState(0);
  const [newActivityDuration, setNewActivityDuration] = useState(0);
  async function getActivities() {
    try {
      const data = await fetchAllActivities();
      setActivitiesList(data);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getActivities();
  });

  if (edit) {
    return (
      <div className="single_routine">
        <form
          id="editRoutineForm"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const updatedRoutine = await editRoutine(
                id,
                newName,
                newGoal,
                isPublic
              );
              setEdit(false);
            } catch (err) {
              throw err;
            }
          }}
        >
          <fieldset>
            <label htmlFor="editRoutineName">New Name</label>
            <input
              type="text"
              placeholder={name}
              id="editRoutineName_input"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="editRoutineGoal">New Goal</label>
            <input
              type="text"
              placeholder={goal}
              id="editRoutineGoal_input"
              value={newGoal}
              onChange={(e) => {
                setNewGoal(e.target.value);
              }}
            />
          </fieldset>
          <button>Submit Changes</button>
        </form>
        <h4>Routine name: {name}</h4>
        <p>Goal: {goal}</p>
        <span>
          <h4>Activities:</h4>
          {activities[0] ? (
            activities.map((activity) => {
              return (
                <SingleActivity
                  name={activity.name}
                  description={activity.description}
                  count={activity.count}
                  duration={activity.duration}
                  routineActivityId={activity.routineActivityId}
                />
              );
            })
          ) : (
            <p>You don't have any activities yet!</p>
          )}
          <form
            id="editActivityForm"
            onSubmit={async (e) => {
              e.preventDefault();
              // right here
              try {
                const newRoutineActivity = await createRoutineActivity(
                  id,
                  newActivityId,
                  newActivityCount,
                  newActivityDuration
                );
              } catch (err) {
                throw err;
              }
              setEdit(false);
            }}
          >
            <fieldset>
              <label htmlFor="newActivity">Add a new Activity</label>
              <select
                name="activities"
                id="activity_dropdown"
                onChange={(e) => {
                  setNewActivity(e.target.value);
                  const desiredActivity = activitiesList.filter((activity) => {
                    return activity.name === e.target.value;
                  });
                  setNewActivityId(desiredActivity[0].id);
                }}
              >
                {activitiesList.map((activity) => {
                  return <option value={activity.name}>{activity.name}</option>;
                })}
              </select>
              <h6>Count</h6>
              <input
                type="number"
                placeholder="Count"
                id="newActivityCount_input"
                value={newActivityCount}
                onChange={(e) => {
                  setNewActivityCount(e.target.value);
                }}
              />
              <h6>Duration</h6>
              <input
                type="number"
                placeholder="Duration"
                id="newActivityDuration_input"
                value={newActivityDuration}
                onChange={(e) => {
                  setNewActivityDuration(e.target.value);
                }}
              />
              <button>Submit</button>
            </fieldset>
          </form>
        </span>

        <button
          className="delete-routine_button"
          onClick={async () => {
            try {
              const deleteData = await deleteRoutine(id);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Delete Routine
        </button>
        <button
          className="edit-routine_button"
          onClick={async () => {
            setEdit(true);
          }}
        >
          Edit Routine or Add Activity
        </button>
      </div>
    );
  } else {
    return (
      <div className="single_routine">
        <h4>Routine name: {name}</h4>
        <p>Goal: {goal}</p>
        <span>
          <h4 className="activitiesH4">Activities:</h4>
          {activities[0] ? (
            activities.map((activity) => {
              return (
                <div className="single_activity">
                  <h5>Activity name: {activity.name}</h5>
                  <p>Description: {activity.description}</p>
                </div>
              );
            })
          ) : (
            <p>You don't have any activities yet!</p>
          )}
        </span>

        <button
          className="delete-routine_button"
          onClick={async () => {
            try {
              const deleteData = await deleteRoutine(id);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Delete Routine
        </button>
        <button
          className="edit-routine_button"
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit Routine or Activity
        </button>
      </div>
    );
  }
};

export default SingleRoutine;
