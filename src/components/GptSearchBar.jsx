import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constants";
import openAI from "../utils/openAI";
import { useRef } from "react";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
	const Dispatch=useDispatch();
	const searchText = useRef(null);

	const searchMovies = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			Api_Options
		); 
		const json = await data.json();
		console.log(json);
		// return json.results.length > 0 ? [json.results[0]] : [];
		return json.results;

	};
	const handleGptSearchClick = async () => {
		const gptQuery =
			"Act as a Movie recommendation system and suggest some movie for the query: " +
			searchText.current.value +
			". Only gove me names of 5 movies, comma separeted like the example result given ahead. Example Result: Sholay, Don, Andaz Apna Apna, Gone Girl";
		const gptResult = await openAI.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});
		const data = gptResult.choices?.[0]?.message.content
			.split(",");
			
			const promiseArray=data.map((movie) => searchMovies(movie)); // give promise 
			
		const searchResult = await Promise.all(promiseArray);
		console.log(searchResult);

		Dispatch(addGptMovieResult({gptMovieResult:data, tmdbMovieResult:searchResult})); //tmdb_result , movie_name_suggested_by_ChatGPT 
	};
	return (
		<div className="pt-[5%] flex justify-center">
			<form
				className=" rounded-lg w-2/3 p-1 bg-black grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					className=" p-4 m-4 col-span-9 rounded-sm"
					type="text"
					ref={searchText}
					placeholder="What would you like to watch today?"
				/>
				<button
					className="rounded-md col-span-3 m-4 bg-red-700 py-2 px-4 text-white"
					onClick={handleGptSearchClick}
				>
					🔍 Search
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
