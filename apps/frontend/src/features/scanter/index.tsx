import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function ScanterFeature() {
    return (
        <>
            <Map
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: -74.784136,
                    latitude: 19.310354,
                    zoom: 7
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/light-v11"
            />
        </>
    );
}