import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constants";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();
	const topRatedMovies = useSelector(
		(store) => store.movie.topRatedMovies
	);

	const getTopRatedMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?page=1",
			Api_Options
		);

		const json = await data.json();
		dispatch(addTopRatedMovies(json.results));
	};
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		!topRatedMovies &&
		getTopRatedMovies();
	}, []);
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */
};
export default useTopRatedMovies;
