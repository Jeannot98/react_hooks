import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import { AiOutlineSearch } from 'react-icons/ai'
import { movies } from '../List'
import MovieCard from './MovieCard';

const SearchMovie = () => {

    //const [searchParams, setSearchParams] = useSearchParams({ n: "" })
    const [search, setSearch] = useState('')


    return (
        <div>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='research' />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                {movies.filter((movie) => {
                    return search.toLowerCase() === '' ? movie : movie.title.toLowerCase().includes(search)
                }).map((movie) => (
                    <Link style={{textDecoration:"none", color:"black"}} to={`/movies/${movie.id}`} key={movie.id}><MovieCard title={movie.title} description={movie.description} rate={movie.rate} image={movie.image} /></Link>
                ))}
            </div>


        </div>
    )
}

export default SearchMovie