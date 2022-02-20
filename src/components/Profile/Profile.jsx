import React from 'react';
import "./Profile.scss"

const Profile = ({user}) => {
    const { email, password, name} = user || {};


  return (
  <div className='profile'>
  <h1>Profile</h1>
  <p>Email: {email}</p>
  <p>Password: {password}</p>
  <p>Name: {name}</p>
  </div>
)};

export default Profile;
