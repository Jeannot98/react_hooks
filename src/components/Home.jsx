import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", paddingTop:"7rem"}}>
        <h1>The only place you can find inspiring Movies</h1>
        <Link to="/movies"><button>Movies</button></Link>
    </div>

  )
}

export default Home