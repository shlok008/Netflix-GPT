import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movie);
	return (
		<div className="bg-black">
			<div className="p-4 -mt-36 relative ">
				<MovieList
					title={"Now Playing"}
					movies={movies.nowPlayingMovies}
				/>
			</div>

			<div className="p-4">
				<MovieList
					title={"Popular Movies"}
					movies={movies.popularMovies}
				/>
				<MovieList
					title={"Top Rated Movies"}
					movies={movies.topRatedMovies}
				/>
				<MovieList
					title={"Popular Shows"}
					movies={movies.popularShows}
				/>
				<MovieList
					title={"Top Rated Shows"}
					movies={movies.topRatedShows}
				/>
			</div>
		</div>
	);
};

export default SecondaryContainer;
