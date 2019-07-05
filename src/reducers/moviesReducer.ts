import produce from 'immer';

export const MOVIES_GET_MOVIES = 'MOVIES_GET_MOVIES';
export const MOVIES_DELETE_MOVIE = 'MOVIES_DELETE_MOVIE';
export const MOVIES_TOGGLE_FAVORITE = 'MOVIES_TOGGLE_FAVORITE';
export const MOVIES_UPDATE_AVG_VOTE = 'MOVIES_UPDATE_AVG_VOTE';

const initialState = {
  movies: []
};

export default produce((draft: any, action: any) => {

  switch (action.type) {
    case MOVIES_GET_MOVIES:
      draft.movies = action.movies;
      draft.movies.forEach((movie: any) => movie.favorite = false);
      break;

      case MOVIES_DELETE_MOVIE:
        draft.movies.splice(action.index, 1);
        break;

      case MOVIES_TOGGLE_FAVORITE:
        draft.movies[action.index].favorite = !draft.movies[action.index].favorite;
        break;

      case MOVIES_UPDATE_AVG_VOTE:
        draft.movies[action.index].vote_average = action.value;
        break;

  }

}, initialState);
