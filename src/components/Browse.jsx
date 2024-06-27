import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../hooks/useTopRatedMovies.jsx";
import usePopularShows from "../hooks/usePopularShows.jsx";
import useTopRatedShows from "../hooks/useTopRatedShows.jsx";
import GptSearch from "./GPTSearch.jsx";
import MainConatainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	usePopularShows();
	useTopRatedShows();

	return (
		<div>
			<Header />
			{showGptSearch ? (
				<GptSearch />
			) : (
				<>
					<MainConatainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
