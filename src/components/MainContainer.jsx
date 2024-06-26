import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainConatainer = () => {
        const movies = useSelector((store) => store.movie?.nowPlayingMovies)
	if (!movies || movies.length === 0) return;
	const mainMovie = movies[0];
	const { original_title, overview, id } = mainMovie;

	return (
		<div className="relative w-full h-screen">
			<VideoBackground id={id} />
			<VideoTitle title={original_title} overview={overview} />
		</div>
	);
};

export default MainConatainer;
