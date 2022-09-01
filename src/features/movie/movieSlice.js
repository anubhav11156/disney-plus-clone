import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  movies: []
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducer: {
    // setMovies is function defined inside a object
    setMovies: (state, action)=>{
      state.movies = action.payload;
    }
  }
})

export const setMovies  = movieSlice.action;
export const selectMovies = (state) => state.movie.movies;
export default movieSlice.reducer;
