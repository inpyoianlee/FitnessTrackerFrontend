import react, { useState } from "react";
import { editRoutineActivity } from "../api";

const SingleActivity = ({
  name,
  description,
  count,
  duration,
  routineActivityId,
}) => {
  const [edit, setEdit] = useState(false);
  const [activityCount, setActivityCount] = useState(count);
  const [activityDuration, setActivityDuration] = useState(duration);
  if (edit) {
    return (
      <div className="single_activity">
        <h5>Activity name: {name}</h5>
        <p>Description: {description}</p>
        <p>Count: {count}</p>
        <p>Duration: {duration}</p>
        <form
          id="edit_activity-form"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              // patch api thing goes here
              const data = await editRoutineActivity(
                routineActivityId,
                activityCount,
                activityDuration
              );
              setEdit(false);
            } catch (err) {
              throw err;
            }
          }}
        >
          <fieldset>
            <label htmlFor="activityCount">Count</label>
            <input
              type="number"
              placeholder="count"
              id="activity_count-edit"
              value={activityCount}
              onChange={(e) => {
                setActivityCount(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="activityDuration">Count</label>
            <input
              type="number"
              placeholder="duration"
              id="activity_duration-edit"
              value={activityDuration}
              onChange={(e) => {
                setActivityDuration(e.target.value);
              }}
            />
          </fieldset>
          <button>Submit Changes to Activity</button>
        </form>
        <button
          id="delete_activity"
          onClick={async () => {
            try {
              const deletedRoutineActivity = await deleteRoutineActivity(
                activity.routineActivityId
              );
            } catch (err) {
              throw err;
            }
          }}
        >
          Delete activity
        </button>
      </div>
    );
  }

  return (
    <div className="single_activity">
      <h5>Activity name: {name}</h5>
      <p>Description: {description}</p>
      <p>Count: {count}</p>
      <p>Duration: {duration}</p>
      <button
        id="edit_activity-button"
        onClick={() => {
          setEdit(true);
        }}
      >
        Edit Activity
      </button>
      <button
        id="delete_activity-button"
        onClick={async () => {
          try {
            const deletedRoutineActivity = await deleteRoutineActivity(
              routineActivityId
            );
          } catch (err) {
            throw err;
          }
        }}
      >
        Delete activity
      </button>
    </div>
  );
};

export default SingleActivity;
