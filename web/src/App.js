import React, {useState} from 'react';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet'
import bombs from './bombs.json'

function App() {
  const [center, setCenter] = useState([55.75, 37.57])
  navigator.geolocation.getCurrentPosition((pos) => {
    let crd = pos.coords;
    setCenter([crd.latitude, crd.longitude])
  })
  return (
    <div className="App">
      
      {/* <YMaps style={{height: "100vh", width: "100vw", margin: 0, padding: 0}}>
        <Map  style={{height: "100vh", width: "100vw", margin: 0, padding: 0}} defaultState={{ center: center, zoom: 9 }}>
          {bombs.map(coord => (
            <Placemark geometry={[coord[0], coord[1]]} properties={{balloonContent: coord[2]}} options={{preset: 'islands#icon'}}/>
          ))}
        </Map>
      </YMaps> */}
      <MapContainer style={{height: "100vh", width: "100vw", margin: 0, padding: 0}} center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {bombs.map((coord, i) => (
          <CircleMarker center={[coord[0], coord[1]]} radius={5} pathOptions={{ color: 'red' }} key={i}>
            <Popup>
              {coord[2]}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

    </div>
  );
}

export default App;
