import { useDispatch, useSelector } from "react-redux";
import { addTopRatedShows } from "../utils/movieSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constants";

const useTopRatedShows = () => {
	const dispatch = useDispatch();
	const topRatedShows = useSelector(
		(store) => store.movie.topRatedShows
	);

	const getTopRatedShows = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/tv/top_rated?page=1",
			Api_Options
		);

		const json = await data.json();
		dispatch(addTopRatedShows(json.results));
	};
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		!topRatedShows &&
		getTopRatedShows();
	}, []);
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */
};
export default useTopRatedShows;
