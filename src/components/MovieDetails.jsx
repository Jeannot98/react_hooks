import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { movies } from '../List'

const MovieDetails = () => {
  const { id } = useParams()
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

      <h1>{movies[id - 1].title}</h1>
      <ReactPlayer url={movies[id - 1].trailer} />
      <p>{movies[id - 1].description}</p>
    </div>
  )
}

export default MovieDetails