import SensorList from "./components/SensorList";

export default function App() {
    return (
        <div style={{padding: 12, fontFamily: "system-ui, sans-serif", fontSize: "large"}}>
            <header style={{paddingBottom: 12}}>
                <h2>Sensors</h2>
            </header>
            <SensorList/>
        </div>
    );
}
