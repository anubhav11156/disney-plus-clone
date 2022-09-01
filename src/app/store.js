import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
},applyMiddleware(thunk))
