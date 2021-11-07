import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

export async function registerUser(username, password) {
  const user = {
    username: username,
    password: password,
  };
  try {
    const { data } = await axios.post(`${BASE}/users/register`, user);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  const user = {
    username: username,
    password: password,
  };
  try {
    const { data } = await axios.post(`${BASE}/users/login`, user);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getCurrentUser(token) {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const data = await axios.get(`${BASE}/users/me`, headers);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getAllPublicRoutinesByUser(username) {
  if (getToken()) {
    const header = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${BASE}/users/${username}/routines`,
        header
      );
      return data;
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const { data } = await axios.get(`${BASE}/users/${username}/routines`);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export async function fetchAllActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createActivity(name, description) {
  const token = getToken();
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const body = { name, description };
  try {
    const { data } = await axios.post(`${BASE}/activities`, body, header);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutine(name, goal, isPublic = false) {
  const token = getToken();
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = {
    name,
    goal,
    isPublic,
  };
  try {
    const { data } = await axios.post(`${BASE}/routines`, body, header);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function editRoutine(routineId, name, goal, isPublic) {
  const token = getToken();
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    name,
    goal,
    isPublic,
  };

  try {
    const { data } = await axios.patch(
      `${BASE}/routines/${routineId}`,
      body,
      header
    );
    return data;
  } catch (err) {
    throw err;
  }
}

export async function deleteRoutine(routineId) {
  const token = getToken();
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.delete(
      `${BASE}/routines/${routineId}`,
      header
    );
    return data;
  } catch (err) {
    throw err;
  }
}

export async function createRoutineActivity(
  routineId,
  activityId,
  count,
  duration
) {
  const token = getToken();
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    activityId,
    count,
    duration,
  };

  try {
    const { data } = await axios.post(
      `${BASE}/routines/${routineId}/activities`,
      body,
      header
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function editRoutineActivity(routineActivityId, count, duration) {
  const token = getToken();
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const body = { count, duration };
  try {
    const { data } = await axios.patch(
      `${BASE}/routine_activities/${routineActivityId}`,
      body,
      header
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutineActivity(routineActivityId) {
  const token = getToken();
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.delete(
      `${BASE}/routine_activities/${routineActivityId}`,
      header
    );
    return data;
  } catch (error) {
    throw error;
  }
}
