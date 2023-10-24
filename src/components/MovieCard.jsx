import React from 'react'
import { AiFillLike } from 'react-icons/ai'

const MovieCard = ({title, description, rate, image}) => {
    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center", padding:10, width:500}}>
            <img src={image} alt="" height={300} width={500} />
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div style={{display:"flex", alignItems:"center", gap:10}}>
                    <h3>{rate}</h3>
                    <AiFillLike />
                </div>
            </div>
        </div>
    )
}

export default MovieCard