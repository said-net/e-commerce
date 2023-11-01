import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./lang.reducer";
import loaderReducer from "./loader.reducer";
import authReducer from "./auth.reducer";

export default configureStore({
    reducer: {
        loader: loaderReducer,
        lang: langReducer,
        auth: authReducer
    }
});