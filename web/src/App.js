import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import bombs from './bombs.json'

function App() {
  console.log(bombs)
  return (
    <div className="App">
      <YMaps style={{height: "100vh", width: "100vw", margin: 0, padding: 0}}>
        <Map  style={{height: "100vh", width: "100vw", margin: 0, padding: 0}} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
          {bombs.map(coord => (
            <Placemark geometry={coord}/>
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
