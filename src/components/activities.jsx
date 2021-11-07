import react, { useEffect, useState } from "react";
import { fetchAllActivities, createActivity } from "../api";
import { getToken } from "../auth";

const Activities = ({ isLoggedIn }) => {
  const [activitiesList, setActivitiesList] = useState([]);
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityDescription, setNewActivityDescription] = useState("");
  async function getFunctions() {
    try {
      const activities = await fetchAllActivities();
      setActivitiesList(activities.reverse());
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getFunctions();
  });

  if (getToken()) {
    return (
      <div>
        <h3>Create a new Activity</h3>
        <form
          id="createActivityForm"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const newActivity = await createActivity(
                newActivityName,
                newActivityDescription
              );
              setNewActivityDescription('');
              setNewActivityName('');
            } catch (err) {
              throw err;
            }
          }}
        >
          <fieldset>
            <label htmlFor="activityName">Name</label>
            <input
              type="text"
              placeholder="Activity name"
              id="createActivityForm_nameInput"
              value={newActivityName}
              onChange={(e) => {
                setNewActivityName(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="activityDescription">Description</label>
            <input
              type="text"
              placeholder="Activity Description"
              id="createActivityForm_descriptionOutput"
              value={newActivityDescription}
              onChange={(e) => {
                setNewActivityDescription(e.target.value);
              }}
            />
          </fieldset>
          <button>Submit</button>
        </form>
        <h1>All of our activities: </h1>
        {activitiesList.map((activity) => {
          return (
            <>
              <h3>Name: {activity.name}</h3>
              <p>Description: {activity.description}</p>
            </>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>All of our activities: </h1>
      {activitiesList.map((activity) => {
        return (
          <>
            <h3>Name: {activity.name}</h3>
            <p>Description: {activity.description}</p>
          </>
        );
      })}
    </div>
  );
};

export default Activities;
