import React, { useState } from 'react';
import * as _ from 'lodash';
import MovieRow from "./MovieRow";

export interface IMovieProps {
	movies: any[];
	deleteMovie: (key: number) => void;
	toggleFavorite: (key: number) => void;
	updateVote?: (value: number, key: number) => void;
}

interface ISort {
	sortOn: string;
	sortDirection: 'asc' | 'desc';
}
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

// declare type SORT = 'asc' | 'desc';

const sortState: ISort = {
	sortOn: '',
	sortDirection: 'asc'
};

const MovieTable = (props: IMovieProps) => {
	const [sort, setSort] = useState(sortState);
	const movies = _.orderBy(props.movies, sort.sortOn , sort.sortDirection);

	const rows = movies.map((row, index) =>
		<MovieRow
		movie={row}
		key={index}
		index={index}
		{...props}
		/>);

	const onSort = (header: string) => {
		let direction = 'asc';
		if (header === sort.sortOn) {
		  direction = sort.sortDirection !== 'asc' ? 'asc' : 'desc';
		}
		setSort({sortOn: header, sortDirection: sort.sortDirection !== 'asc' ? 'asc' : 'desc'}); // todo // FIXME:
	};

	return (
		<table>
			<thead>
				<tr>
					<td onClick={() => onSort('title')}>Title</td>
					<td onClick={() => onSort('vote_count')}>Vote Count</td>
					<td onClick={() => onSort('vote_average')}>Average Vote</td>
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

export default MovieTable;
