import React, { useState } from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import {movies} from '../List'


const AddMovie = () => {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState(0)
    const [movieList, setMovielist] = useState(movies);




    function handleSubmit(e) {
        e.preventDefault()

        setMovielist(currentList => {
            return [
                ...currentList, { id: crypto.getRandomValues, image: `${image}`, titl: title, description: description, rate: rate }
            ]
        })

        setDescription("")
        setImage("")
        setTitle("")
        setRate(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="" style={{ display: "flex", justifyContent: "space-around" }}>
                <input type="url" value={image} onChange={e => setImage(e.target.value)} placeholder='Image URL' />
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
                <input type="text" value={rate} onChange={e => setRate(e.target.value)} placeholder='Rate' />
                <button>Add</button>
            </form>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                {movieList.map((movie) => (
                    <Link key={movie.id} style={{textDecoration:"none", color:"black"}} to={`/movies/${movie.id}`}><MovieCard title={movie.title} description={movie.description} rate={movie.rate} image={movie.image} /></Link>
                ))}
            </div>
        </div>
    )
}

export default AddMovie