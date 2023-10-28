import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchMovie from './components/SearchMovie';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <div className="App">

      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingInline:"2rem"}}>
        <h1>InspireMovies</h1>
          
        <nav>
        <ul className='ul'>
          <li style={{textDecoration:"none", marginRight:"2rem"}}>
            <Link to="/" style={{textDecoration:"none", color:"black", fontSize:"20px"}}>Home</Link>
          </li>
          <li style={{textDecoration:"none", marginRight:"2rem"}}>
            <Link to="/movies/add" style={{textDecoration:"none", color:"black", fontSize:"20px"}}>Add Movie</Link>
          </li>
          <li style={{textDecoration:"none", marginRight:"2rem"}}>
            <Link to="/movies/search" style={{textDecoration:"none", color:"black", fontSize:"20px"}}>Search Movie</Link>
          </li>
        </ul>
      </nav>
       
      </div>

     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies'>
          <Route index element={<MovieList />} />
          <Route path='add' element={<AddMovie />} />
          <Route path='search' element={<SearchMovie />} />
          <Route path=':id' element={<MovieDetails />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
