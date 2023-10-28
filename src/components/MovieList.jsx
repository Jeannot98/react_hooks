//import React, { useState } from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import {movies} from '../List'
//import { Link } from 'react-router-dom';



const MovieList = () => {
    

    // const [search, setSearch] = useState('');



    //let navigate = useNavigate()

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
        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems:"center" }}>
            

            <h1>Movies list</h1>

           <div  style={{ display: "grid",gridTemplateColumns:"repeat(2, 1fr)" }}>
           {movies.map((movie) => (
                <Link key={movie.id} style={{textDecoration:"none", color:"black"}} to={`/movies/${movie.id}`}><MovieCard title={movie.title} description={movie.description} rate={movie.rate} image={movie.image}/></Link>
            ))}
           </div>



        </div>
    )
}

export default MovieList