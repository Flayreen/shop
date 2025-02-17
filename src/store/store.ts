import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice.ts";

export const store = configureStore({
    reducer: {
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;