import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import MovieTable from './components/MovieTable/MovieTable'
import {deleteMovie, getMovies, toggleFavoriteMovie, updateVote} from './actions/movieActions';
import FavoriteTable from "./components/FavoriteTable";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";

export interface IAppProps {
  movies: any[];
  getMovies: () => void;
  deleteMovie: (index: number) => void;
  toggleFavorite: (index: number) => void;
  updateVote: (value: number, index: number) => void;
}

const App = (props: IAppProps) => {

  useEffect(() => {
    props.getMovies();
  }, []);

  const deleteMovie = (index: number) => {
    props.deleteMovie(index);
  };

  const toggleFavorite = (index: number) => {
    props.toggleFavorite(index);
  };

  const updateVote = (value: number, index: number) => {
    props.updateVote(value, index);
  };

  return (
    <div className='App'>
      <Tabs>
        <Tab header='Movies List'>
          <MovieTable movies={props.movies} deleteMovie={deleteMovie} toggleFavorite={toggleFavorite} updateVote={updateVote}/>
        </Tab>
        <Tab header='Favorites List'>
          <FavoriteTable movies={props.movies} deleteMovie={deleteMovie} toggleFavorite={toggleFavorite} />
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  movies: state.moviesReducer.movies
});

const mapDispatchToProps = (dispatch: any) => ({
  getMovies: () => dispatch(getMovies()),
  deleteMovie: (index: number) => dispatch(deleteMovie(index)),
  toggleFavorite: (index: number) => dispatch(toggleFavoriteMovie(index)),
  updateVote: (value: number, index: number) => dispatch(updateVote(value, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
