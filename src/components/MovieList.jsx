import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	return (
		movies && (
		<div className="">
			<div>
				<h1 className="text-xl text-white p-2">{title}</h1>
			</div>
			<div className="flex overflow-x-scroll hide-scrollbar">
				{movies?.map((movie)=>(
				<MovieCard key={movie.id}
					title={movie.original_title}
					poster={movie.poster_path}
					id={movie.id}
					overview={movie.overview}
				/>)
				)}
			</div>
		</div>
	));
};

export default MovieList;
