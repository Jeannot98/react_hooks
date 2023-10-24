import React, { useState } from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'
import MovieCard from './MovieCard';

const MovieList = () => {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState(0)
    const [movieList, setMovielist] = useState([]);

    const [search, setSearch] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        setMovielist(currentList => {
            return [
                ...currentList, { id: crypto.getRandomValues, image: image, title: title, description: description, rate: rate }
            ]
        })

        setDescription("")
        setImage("")
        setTitle("")
        setRate(0)
    }

    /*function searchMovie(title) {


        setMovielist(currentList => {
            return currentList.filter(movie => movie.title === title)
        })
    }*/


    /* <div>
         <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='research' />
         <AiOutlineSearch onClick={searchMovie(search)} />
     </div>*/


    return (
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
            <div>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='research' />
            </div>

            <form onSubmit={handleSubmit} action="" style={{display:"flex", justifyContent:"space-around"}}>
                <input type="url" value={image} onChange={e => setImage(e.target.value)} placeholder='Image URL' />
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
                <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder='Rate' />
                <button>Add</button>
            </form>
           


            {movieList.map(movie => (
                <div style={{ display: "grid" }}>
                    <MovieCard title={movie.title} description={movie.description} rate={movie.rate} />
                </div>
            ))}

        </div>
    )
}

export default MovieList