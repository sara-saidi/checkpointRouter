import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h1>Hello profile page</h1>
     <Link to='Setting'> <button >Update Profile</button></Link>
     <Outlet/>
    </div>
  )
}

export default Profile
