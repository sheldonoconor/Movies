import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import MovieTable from './components/MovieTable'
import {deleteMovie, getMovies, toggleFavoriteMovie} from './actions/movieActions';

export interface IAppProps {
  movies: any[];
  getMovies: () => void;
  deleteMovie: (index: number) => void;
  toggleFavorite: (index: number) => void;
}

const App = (props: IAppProps) => {

  useEffect(() => {
    props.getMovies();
  }, []);

  const deleteMovie = (index: number) => {
    props.deleteMovie(index);
  }

  const toggleFavorite = (index: number) => {
    props.toggleFavorite(index);
  }

  return (
    <div className="App">
      <div>
        <MovieTable data={props.movies} delete={deleteMovie} toggleFavorite={toggleFavorite}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = (dispatch: any) => ({
  getMovies: () => dispatch(getMovies()),
  deleteMovie: (index: number) => dispatch(deleteMovie(index)),
  toggleFavorite: (index: number) => dispatch(toggleFavoriteMovie(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
