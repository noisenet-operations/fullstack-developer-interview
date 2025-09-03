import { useGetSensorsQuery } from "../store/api/sensorsApi";
import type { Sensor } from "../store/api/types.ts";
import SensorsListItem from './SensorsListItem.tsx'
export default function SensorList() {
    const status = "active";
    const { data, isLoading, isError} = useGetSensorsQuery(status);

    if (isLoading) return <p>Loading…</p>;
    if (isError) return <p>Error loading sensors.</p>;
    const renderedSensors = data?.map((sensor: Sensor) => (<SensorsListItem key={sensor.id} id={sensor.id} sn={sensor.sn}/>))

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 12}}>
            {renderedSensors}
        </div>
    )
}
