import React, { useEffect, useState } from 'react';
import Sidebar from "../src/component/Sidebar"
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/data/getAll');
        setData(response.data); // Assuming the data is an array
      } catch (error) {
        console.error(error);
      }
    };

    console.log(data)
    fetchData();
  }, []); 

  return (
    <>
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className="h-auto w-full">
        <MapContainer center={[-6.761946739265074, 107.20976353938751]} zoom={13} className=''>
          <TileLayer attribution="&copy; <a>Kelompok 2</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.map(titik =>(
            <Marker position={[titik.Lattitude, titik.Longitude]}>
              <Popup>
                {titik.Name}
                <br/>
                {titik.Lattitude}
                <br/>
                {titik.Longitude}
                </Popup>
            </Marker>
          ))

          }
        </MapContainer>
      </div>
    </div>
    </>
  );
}

export default App;