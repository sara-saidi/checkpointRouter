import React from 'react'

const Home = ({getProfile}) => {
  return (
    <div>
      <h1>Hello Home page</h1>
      <button onClick={getProfile}>get Profile</button>
    </div>
  )
}

export default Home
