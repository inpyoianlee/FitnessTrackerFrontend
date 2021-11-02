import React from 'react';

const Users = ({ userName }) => {
  return (
    <div className='profile-outer'>
      <h2>{userName}'s Profile</h2>
    </div>
  )
}

export default Users;