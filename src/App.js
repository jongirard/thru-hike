import './App.css';
import Map from 'react-map-gl';

function App() {
  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.MAPBOX_TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={styles.viewPort}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

const styles = {
  viewPort: {
    width: '100vw',
    height: '100vh',
    latitude: 21.1458,
    longitude: 79.0882,
    zoom: 1
  }
}

export default App;
