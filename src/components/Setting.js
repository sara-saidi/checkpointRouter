import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div>
   <Link to ='/Profile'> <button>back to profile</button></Link>
      <input type='text'/>
      <input type='text'/>
      <input type='text'/>
      <button>Update</button>
    </div>
  )
}

export default Setting
