import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SensorsResponse } from "./types.ts";

// Point baseUrl to your mock or backend host before the session.
export const sensorsApi = createApi({
    reducerPath: "sensorsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getSensors: builder.query<SensorsResponse, string>({
            query: (status) => {
                // Do something with status
                return {
                    url: '/sensors',
                    method: 'GET'
                }
            }
        })
    }),
});

export const {
    useGetSensorsQuery
} = sensorsApi;
