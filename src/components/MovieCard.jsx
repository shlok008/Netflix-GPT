import React from 'react'
import { IMAGE_URL } from '../utils/constants';

const MovieCard = ({ title, poster}) => {

	return (
		<div className="min-w-40">
			<div
				className="hover:scale-95 hover:bg-gray-800  transition-transform duration-100 ease-in-out hover:cursor-pointer"
			>
				<img alt={title} src={IMAGE_URL + poster} />
			</div>
		</div>
	);
};

export default MovieCard;