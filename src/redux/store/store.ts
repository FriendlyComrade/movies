import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import mainReducer from '../reducers/filmsReducer';
import {moviesAPI} from '../services/MovieService'


const rootReducer = combineReducers({
  toolkit: mainReducer, 
  [moviesAPI.reducerPath]: moviesAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(moviesAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']