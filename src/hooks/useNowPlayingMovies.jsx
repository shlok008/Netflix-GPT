import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { Api_Options } from "../utils/constants";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	const nowPlayingMovies=useSelector(store=> store.movie.nowPlayingMovies);

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			Api_Options
		);

		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		!nowPlayingMovies &&  //checking if store already made this call or not
		getNowPlayingMovies();
	}, []);
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */
};
export default useNowPlayingMovies;
 