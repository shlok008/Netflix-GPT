import React, { useEffect, useState } from "react";
import { Api_Options } from "../utils/constants";

const VideoBackground = ({id}) => {
	const [trailerId, setTrailerId] = useState(null);
	//fetching trailer
	const getMovieTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + id + "/videos",
			Api_Options
		);
		const json = await data.json();
		const filterData = json.results.filter(
			(video) => video.type === "Trailer"
		);
		const trailer = filterData.length ? filterData[0] : json.results[0];
		setTrailerId(trailer.key);
	};

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		getMovieTrailer();
	}, []);
	//no dependency
	/* eslint-enable react-hooks/exhaustive-deps */

	return (
		<div className="absolute inset-0 ">
			<iframe
				className="w-full h-full  object-cover"
				width="560"
				height="315"
				src={"https://www.youtube.com/embed/" + trailerId +"?&autoplay=1&mute=0&rel=0"}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default VideoBackground;
