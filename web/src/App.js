import React, {useState} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import bombs from './bombs.json'

function App() {
  const [center, setCenter] = useState([55.75, 37.57])
  console.log(bombs)
  navigator.geolocation.getCurrentPosition((pos) => {
    let crd = pos.coords;
    console.log(crd.latitude)
    console.log(crd.longitude)
    setCenter([crd.latitude, crd.longitude])
  })
  return (
    <div className="App">
      <YMaps style={{height: "100vh", width: "100vw", margin: 0, padding: 0}}>
        <Map  style={{height: "100vh", width: "100vw", margin: 0, padding: 0}} defaultState={{ center: center, zoom: 9 }}>
          {bombs.map(coord => (
            <Placemark geometry={[coord[0], coord[1]]} properties={{balloonContent: coord[2]}} options={{preset: 'islands#icon'}}/>
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
