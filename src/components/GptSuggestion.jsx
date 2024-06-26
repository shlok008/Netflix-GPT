import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
	const { gptMovieResult, tmdbMovieResult } = useSelector(
		(store) => store.gpt
	);
	if (!gptMovieResult) return null;

	return (
		<div className="p-4 m-4 bg-black text-white opacity-80">
			{gptMovieResult.map((movie, index) => (
				<MovieList
					key={movie}
					title={movie}
					movies={tmdbMovieResult[index]}
				/>
			))}
		</div>
	);
};

export default GptSuggestion;
