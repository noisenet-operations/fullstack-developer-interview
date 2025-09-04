# Full‑Stack Developer Interview Exercise

Welcome! This repository is a small React + Redux Toolkit (RTK Query) app designed for an interview exercise. Your goal is to implement a few incremental features to demonstrate your understanding of React, Redux Toolkit, and client–server data flows.

## What’s already here
- Build tooling: Vite + TypeScript + React 19
- State management: Redux Toolkit + RTK Query
- Mock backend: json-server serving data from `src/backend/data.json`
- A minimal UI that lists sensors fetched via RTK Query

Key files
- `src/App.tsx` – root UI
- `src/components/SensorList.tsx` – renders the list of sensors
- `src/components/SensorsListItem.tsx` – single sensor tile
- `src/store/index.ts` – Redux store configuration (adds RTK Query middleware)
- `src/store/api/sensorsApi.tsx` – RTK Query API slice (baseUrl points to the mock server)
- `src/store/api/types.ts` – shared TypeScript types
- `src/backend/data.json` – mock data for json-server

Mock API endpoints (json-server defaults)
- GET `http://localhost:3001/sensors`
- GET `http://localhost:3001/sensor_data`
    - Filter examples:
        - `http://localhost:3001/sensor_data?device_id=0`
        - `http://localhost:3001/sensors?id=1` (json-server supports basic query filtering)

Note: `sensorsApi.getSensors` currently ignores its `status` argument and simply requests `/sensors`.

## Getting started
1. Code should run fine in CodeSandbox

## Tasks
Choose one or more tasks from the list below to implement in a pair-programming style with your interviewer. Feel free to look up documentation.

1. Style the SensorListItem based on whether the sensor is active or inactive.

2. Create a way to filter the sensors based on their status.
    - Currently, `useGetSensorsQuery(status)` passes a `status` argument that is ignored in `sensorsApi.getSensors`.
    - Adjust the query to append a query param (e.g., `/sensors?status=active`).
    - Add a simple UI control to choose status (e.g., All, Active, Inactive) and display the filtered results.

3. Show sensor data based on a currently selected sensor.
    - Create a new endpoint in `sensorsApi` to fetch sensor_data for a given device id, e.g. `GET /sensor_data?device_id=1`.
    - When a sensor tile is clicked, render a side panel or a section below that lists the most recent data points for that sensor (temperature, humidity, etc.).
    - Demonstrate loading and error states.

4. Discuss Caching and invalidation (RTK Query focus)
    - Tag your endpoints and set up proper cache invalidation between listing and detail/mutation endpoints.

6. Discuss a testing strategy
    - Add a simple unit test for a pure function or a small component, or integration tests for an RTK Query endpoint using MSW or a similar tool.

## Evaluation criteria
We’re looking for:
- Understanding of React component structure and state vs. props
- Comfort with Redux Toolkit and RTK Query (queries, mutations, tags, invalidation)
- Good API interaction patterns: loading, error, empty states
- Code quality: readability, types, small components, sensible file structure


## Tips and hints
- RTK Query docs: https://redux-toolkit.js.org/rtk-query/overview
- json-server docs: https://github.com/typicode/json-server