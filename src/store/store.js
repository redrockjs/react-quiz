import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducer";

const preloadedState = {
  answers: []
}

const store = configureStore({
  reducer:rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
});

export default store;
