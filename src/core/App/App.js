import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from '../../common//components/Header';
import MoviePage from '../../features/movies/MoviePage';
import MovieList from '../../features/movies/MovieList';
import PeopleList from '../../features/people/PeopleList';
import PersonPage from '../../features/people/PersonPage';
import { toMovie, toMovies, toPeople, toPerson } from './routes';
import {useDispatch} from "react-redux";
import {fetchGenres} from "../../features/movies/MovieGenres/moviesGenresSlice";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> { dispatch(fetchGenres())}, []);

 
    return (
        <HashRouter>
            <Header />{' '}
            <Routes>
                <Route path={toMovies()} element={<MovieList />} />
                <Route path={toMovie()} element={<MoviePage />} />
                <Route path={toPeople()} element={<PeopleList />} />
                <Route path={toPerson()} element={<PersonPage />} />
                <Route path="*" element={<MovieList />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
