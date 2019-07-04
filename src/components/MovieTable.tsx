import React, { useState } from 'react';
import * as _ from 'lodash';

export interface IMovieProps {
	data: any[];
	delete: (key: number) => void;
	toggleFavorite: (key: number) => void;
}

const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

	const sortState = {
		sortOn: '',
		sortDirection: ''
	};

const MovieTable = (props: IMovieProps) => {
	const [sort, setSort] = useState(sortState);

console.log(sort);
	const data = _.sortBy(props.data, sort.sortOn , 'desc');
	console.log(data);
	const rows = data.map((row, index) => getRow(row, index, props.delete, props.toggleFavorite));

	const onSort = (header: string) => {
		let direction = SORT_ASC;
		if (header === sort.sortOn) {
		  direction = sort.sortDirection !== SORT_ASC ? SORT_ASC: SORT_DESC;
		}
		setSort({sortOn: header, sortDirection: direction});
	};

	return (
	<table>
		<thead>
			<tr>
				<td onClick={() => onSort('title')}>Title</td>
				<td onClick={() => onSort('vote_count')}>Vote Count</td>
				<td onClick={() => onSort('vote_average')}>Average Count</td>
				<td onClick={() => onSort('popularity')}>Popularity</td>
				<td>Poster</td>
				<td>Overview</td>
				<td>Favorite</td>
				<td>Delete</td>
			</tr>
		</thead>
		<tbody>
			{rows}
		</tbody>
	</table>
	);
}

const getRow = (movie: any, key: number, deleteCallback: any, favoriteCb: any) => {
	return (
		<tr key={key}>
			<td>{movie.title}</td>
			<td>{movie.vote_count}</td>
			<td>{movie.vote_average}</td>
			<td>{movie.popularity}</td>
			<td>{movie.poster_path}</td>
			<td>{movie.overview}</td>
			<td><input type="checkbox" checked={movie.favorite} onChange={() => favoriteCb(key)}/></td>
			<td><button onClick={() => deleteCallback(key)}>Delete</button></td>
		</tr>
	);
};

export default MovieTable;
