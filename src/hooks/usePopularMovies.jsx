import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constants";

const usePopularMovies = () => {
	const dispatch = useDispatch();
	const popularMovies = useSelector(
		(store) => store.movie.popularMovies
	);

	const getPopularMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular?page=1",
			Api_Options
		);

		const json = await data.json();
		dispatch(addPopularMovies(json.results));
	};
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => { 
		! popularMovies &&
		getPopularMovies();
	}, []);
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */
};
export default usePopularMovies;
