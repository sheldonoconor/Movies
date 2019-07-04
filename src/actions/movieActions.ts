import {MovieService} from "../services/MovieService";
import {MOVIES_GET_MOVIES,
	MOVIES_DELETE_MOVIE,
MOVIES_TOGGLE_FAVORITE} from "../reducers/moviesReducer";

const movieService = new MovieService('7');

export const getMovies = () => (dispatch: any) => {
	movieService.getTopRated()
		.then((movies: any) => dispatch(loadMovies(movies.results)));
}

export const deleteMovie = (index: number) => ({
	type: MOVIES_DELETE_MOVIE,
	index
});

export const toggleFavoriteMovie = (index: number) => ({
	type: MOVIES_TOGGLE_FAVORITE,
	index
});

const loadMovies = (movies: any[]) => {
	return {
		type: MOVIES_GET_MOVIES,
		movies
	}
}
