import React, { useEffect, useState } from 'react';
import Sidebar from "../src/component/Sidebar"
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker, Polyline,} from 'react-leaflet';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/data/getAll');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Group points by Name
  const groupedData = {};
  data.forEach(titik => {
    if (!groupedData[titik.Name]) {
      groupedData[titik.Name] = [];
    }
    groupedData[titik.Name].push([titik.Lattitude, titik.Longitude]);
  });

  const warnaMarker = (index) => {
    const colors = ["blue", "gold", "red", "green", "orange", "yellow", "violet", "grey", "black"];
    return colors[index % colors.length];
  }

  return (
    <>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className="h-auto w-full">
          <MapContainer center={[-6.760105360614504, 107.20951551421041]} zoom={50} className=''>
            <TileLayer attribution="&copy; <a>Kelompok 2</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {Object.entries(groupedData).map(([name, polylinePoints], index) => (
              <div key={index}>
                <h2>{name}</h2>
                {polylinePoints.length > 1 && (
                  <Polyline key={index} positions={polylinePoints} color="blue" />
                )}

                {data
                  .filter(titik => titik.Name === name)
                  .map(titik => (
                    <Marker key={titik.id} position={[titik.Lattitude, titik.Longitude]} icon={new L.Icon({iconUrl:`https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${warnaMarker(index)}.png`, iconSize: [25, 41]})}>
                      <Popup>
                        {titik.Name}
                        <br />
                        {titik.Status}
                      </Popup>
                    </Marker>
                  ))}
              </div>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default App;