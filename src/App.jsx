// import { useState } from 'react'
import Sidebar from "../src/component/Sidebar"
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';

const Lokasi =[
  {
    Loc: [-6.76020, 107.21070],
    Name: "Device 1"
  },

  { 
    Loc: [-6.76197, 107.20984],
    Name: "Device 2"
  },

  {
    Loc: [-6.76134, 107.21031],
    Name: "Device 3"
  },

  {
    Loc: [-6.75919, 107.21087],
    Name: "Device 4"
  },
  {
    Loc: [-6.75367, 107.21299],
    Name: "Device 5",
  }
]

function App() {
  return (
    <>
    <div className='flex mr-auto'>
      <Sidebar />
      <div className="w-[80vw] h-80%">
        <MapContainer center={[-6.761946739265074, 107.20976353938751]} zoom={13} className='w-full'>
          <TileLayer attribution="&copy; <a>Kelompok 2</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {Lokasi.map(titik =>(
            <Marker position={titik.Loc}>
              <Popup>
                {titik.Name}
                <br/>
                {titik.Loc}
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