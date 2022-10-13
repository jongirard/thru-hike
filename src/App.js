import './App.css';
import Map, { Source, Layer } from 'react-map-gl';

import data from './data'

function App() {

	const layerStyle = {
		id: 'point',
		type: 'circle',
		paint: {
			'circle-radius': 10,
			'circle-color': '#007cbf'
		}
	};

	const center = data.features.at(Math.floor(data.features.length/2)).geometry.coordinates

  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: center[0],
          latitude: center[1],
					zoom: 8
        }}
        style={styles.viewPort}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
		<Source id="trailPoints" type="geojson" data={data}>
			<Layer {...layerStyle} />
		</Source>
		</Map>
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
