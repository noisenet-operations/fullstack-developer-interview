export type Sensor = {
    id: number;
    sn: string;
};

export type SensorsResponse = Sensor[];

export type SensorData = {
    id: number;
    device_id: number;
    start_time: string,
    end_time: string,
    temperature: number,
    humidity: number,
    precipitation: number,
    wind_speed: number,
    wind_direction: number,
    coords: number[]
};
