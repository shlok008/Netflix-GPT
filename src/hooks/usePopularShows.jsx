import { useDispatch, useSelector } from "react-redux";
import { addPopularShows } from "../utils/movieSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constants";

const usePopularShows = () => {
	const dispatch = useDispatch();
	const popularShows = useSelector(
		(store) => store.movie.popularShows
	);

	const getPopularShows = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/tv/popular?page=1",
			Api_Options
		);

		const json = await data.json();
		dispatch(addPopularShows(json.results));
	};
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		!popularShows &&
		getPopularShows();
	}, []);
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */
};
export default usePopularShows;
