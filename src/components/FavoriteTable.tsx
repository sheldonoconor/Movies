import React, { useState } from 'react';
import MovieTable, {IMovieProps} from "./MovieTable/MovieTable";

const FavoriteTable = (props: any) => {
  const data = props.movies.filter((movie: any) => movie.vote_average >= 7 || movie.favorite);
  return (
    <MovieTable {...props} movies={data} />
  );
};

export default FavoriteTable;
