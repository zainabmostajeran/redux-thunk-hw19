import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/feature/counter/counterslice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
