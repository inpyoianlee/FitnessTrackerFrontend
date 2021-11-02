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
    const data = await axios.post(`${ BASE }/users/register`, user);
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
    const data = await axios.post(`${ BASE }/users/login`, user)
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