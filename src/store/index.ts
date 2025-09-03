import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sensorsApi } from "./api/sensorsApi.tsx";

export const store = configureStore({
    reducer: {
        [sensorsApi.reducerPath]: sensorsApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(sensorsApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {useGetSensorsQuery} from './api/sensorsApi.tsx'
