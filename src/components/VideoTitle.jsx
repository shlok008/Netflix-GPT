
const VideoTitle = ({title, overview}) => {
	return (
		<div className="absolute top-2/4 left-2/5 text-white z-10 px-4">
			<h1 className="text-l md:text-4xl font-bold">{title}</h1>
			<p className="hidden md:inline-block py-5 text-md w-1/4">{overview}</p>
			<div className="flex flex-row space-x-1">
				<button className="bg-white text-black md:py-2 py-1 md:px-3 bg-opacity-20 rounded-md hover:bg-gray-100">
					▶ Play
				</button>
				<button className="bg-white text-black md:py-2 py-1 md:px-3  bg-opacity-20 rounded-md hover:bg-gray-100">
					ℹ️ More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
