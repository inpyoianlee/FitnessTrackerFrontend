import react, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllPublicRoutinesByUser } from "../api";

const Profile = ({ isLoggedIn, username }) => {
  const [userRoutines, setUserRoutines] = useState([]);

  async function getRoutines() {
    try {
      const userData = await getAllPublicRoutinesByUser(username);
      setUserRoutines(userData);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getRoutines();
  }, []);

  return (
    <div className="ProfileBox">
      <h1>Welcome {username}</h1>
      <div className="profile-routine_box">
        <h3>Your Routines</h3>
        {
            userRoutines.map((routine) => {
                return (
                    <div className="single_routine">
                        <h4>Routine name: { routine.name }</h4>
                        <p>Goal: { routine.goal }</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );

};

export default Profile;
