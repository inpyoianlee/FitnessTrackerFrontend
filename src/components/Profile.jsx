import react, { useEffect, useState } from "react";
import { getAllPublicRoutinesByUser } from "../api";
import { Link } from "react-router-dom";
import { clearCurrentUser, clearCurrentUsername } from "../auth";
import { useHistory } from "react-router-dom";

const Profile = ({ isLoggedIn, username }) => {
  const [userRoutines, setUserRoutines] = useState([]);
  let history = useHistory()
  
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
      <button 
          id='logout_button' 
          onClick={() => {
            clearCurrentUser()
            clearCurrentUsername()
            setIsLoggedIn(false);
            history.push('/');
          }}
        >Log out</button>
      <div className="profile-routine_box">
        <h3>Your Routines</h3>
        {userRoutines ? (
          userRoutines.map((routine) => {
            return (
              <div className="RoutineCard">
                <h4>Routine name: {routine.name}</h4>
                <p>Goal: {routine.goal}</p>
              </div>
            );
          })
        ) : (
          <h4>You haven't created any routines!</h4>
        )}
        <Link to="/MyRoutines">Create a new routine!</Link>
      </div>
    </div>
  );
};

export default Profile;
