import React, { useState } from 'react';

export interface IMovieRowProps {
  movie: any;
	index: number;
	toggleFavorite: (key: number) => void;
  deleteMovie: (key: number) => void;
	updateVote?: (value: number, key: number) => void;
}

const MovieRow = (props: IMovieRowProps) => {
	const {movie, index, toggleFavorite, deleteMovie, updateVote} = props;
	const [editVote, setEditVote] = useState(false);

	const onEditVote = () => {
    if (updateVote) {
      setEditVote(!editVote);
    }
	};

	const onUpdateVote = (index: number, e: React.FormEvent<HTMLInputElement>) => {
    if (updateVote) {
      updateVote(+e.currentTarget.value, index);
    }
	};

	return (
		<tr key={index}>
			<td>{movie.title}</td>
			<td>{movie.vote_count}</td>
			<td>
				{editVote ?
					<input type="number" onChange={(e) => onUpdateVote(index, e)} onBlur={onEditVote}/>
					: <span onClick={onEditVote}>{movie.vote_average}</span>}
			</td>
			<td>{movie.popularity}</td>
			<td>{movie.poster_path}</td>
			<td>{movie.overview}</td>
			<td><input type="checkbox" checked={movie.favorite} onChange={() => toggleFavorite(index)}/></td>
			<td><button onClick={() => deleteMovie(index)}>Delete</button></td>
		</tr>
	);
};

export default MovieRow;
