import axios from 'axios';

const BASE = 'https://fitnesstrac-kr.herokuapp.com/api'

// function that acquires data of the registered user in this format:
// {
//   "user": {
//     "id": 5,
//     "username": "superman27"
//   },
//   "message": "you're signed up!",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJzdXBlcm1hbjI3MTIiLCJpYXQiOjE2MDE3OTcwNDIsImV4cCI6MTYwMjQwMTg0Mn0.8q2B4oCtL3Dx-fRk_K0YTZaCgzrYXXeCqU6G1AI9JT0"
// }
export async function registerUser(username, password) {
  const user = {
    username: username,
    password: password
  }
  try {
    const { data } = await axios.post(`${ BASE }/users/register`, user);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  const user = {
    username: username,
    password: password
  }
  try {
    const { data } = await axios.post(`${ BASE }/users/login`, user)
    return data;
  } catch(err) {
    throw err;
  }
}

export async function getCurrentUser( token ) {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    }
  }

  try {
    const data = await axios.get(`${ BASE }/users/me`, headers)
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getAllPublicRoutinesByUser( username ) {
  try {
    const { data } = await axios.get(`${ BASE }/users/${ username }/routines`);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function fetchAllActivities() {
  try {
    const { data: { data } } = await axios.get(`${BASE}/posts`);
    return data.activity
  } catch (error) {
    throw error;
  }
}

export async function fetchAllRoutines() {
  try {
    const { data: { data } } = await axios.get(`${BASE}/posts`);
    return data.routine
  } catch (error) {
    throw error;
  }
}

export async function fetchAllRoutineActivity() {
  try {
    const { data: { data } } = await axios.get(`${BASE}/posts`);
    return data.routineActivity
  } catch (error) {
    throw error;
  }
}

export async function createActivity(id, name, description, token) {
  try {
    
    const { data } = await axios.post(`${BASE}/posts`,
      {
        post: {
         id: id,
         name: name, 
          description: description
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    
    return data
  } catch (error) {
    throw error;
  }
}

export async function createRoutine(id, creatorId, isPublic, name, goal, token) {
  try {
    
    const { data } = await axios.post(`${BASE}/posts`,
      {
        post: {
          id : id,
          creatorId : creatorId,
          isPublic : isPublic,
          name: name,
          goal: goal,
          description: description,
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    
    return data
  } catch (error) {
    throw error;
  }
}

export async function createRoutineActivity(id, routineId, activityId, duration, count, token) {
  try {
    
    const { data } = await axios.post(`${BASE}/posts`,
      {
        post: {
          id: id,
          routineId: routineId,
          activityId: activityId,
          duration: duration,
          count: count,
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    
    return data
  } catch (error) {
    throw error;
  }
}

export async function fetchUserData(token) {
  try {
    const { data: { data } } = await axios.get(`${BASE}/users/me`,
      { headers: { Authorization: `Bearer ${token}` } });
    return data
  } catch (error) {
    throw error;
  }
}

export async function editRoutineActivity(title, description, price, location, willDeliver, token, postId) {
  try {
    const data = await axios.patch(`${BASE}/posts/${postId}`,
      {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    return data.data
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutineActivity(token, postId) {
  try {
    const { data } = await axios.delete(`${BASE}/posts/${postId}`,
      { headers: { Authorization: `Bearer ${token}` } });
    return data
  } catch (error) {
    throw error;
  }
}



