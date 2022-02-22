import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function App() {
  return (
    <div className="App">
      <YMaps style={{height: "100vh", width: "100vw", margin: 0, padding: 0}}>
        <Map  style={{height: "100vh", width: "100vw", margin: 0, padding: 0}} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
          <Placemark geometry={[55.75, 37.57]}/>
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
