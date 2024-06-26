import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		nowPlayingMovies: null,
		popularMovies: null,
		topRatedMovies:null,
		popularShows:null,
		topRatedShows:null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addPopularShows: (state, action) => {
			state.popularShows = action.payload;
		},
		addTopRatedShows: (state, action) => {
			state.topRatedShows = action.payload;
		},
	},
});

export const {
	addNowPlayingMovies,
	addPopularMovies,
	addTopRatedMovies,
	addPopularShows,
	addTopRatedShows,
} = movieSlice.actions;

export default movieSlice.reducer;
