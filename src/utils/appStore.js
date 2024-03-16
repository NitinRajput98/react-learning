import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubApi } from "../utils/github";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(appStore.dispatch);

export default appStore;
