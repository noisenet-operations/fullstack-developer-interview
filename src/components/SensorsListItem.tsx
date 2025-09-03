import {Sensor} from "../store/api/types.ts";

export default function SensorsListItem(sensorProps : Sensor) {
    return (
        <div style={{ border: "1px solid #ddd", padding: 12, width: 100, height: 100, justifyContent: "center", alignItems: "center", display: "flex" }}>
            {sensorProps.sn}
        </div>
    )
}