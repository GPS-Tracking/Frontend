// import { useState } from 'react'
import Sidebar from "../src/component/Sidebar"
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';

const Lokasi =[
  {
    Loc: [-6.76020, 107.21070],
    popUp: "Marker 1"
  },

  { 
    Loc: [-6.76197, 107.20984],
    popUp: "Marker 2"
  },

  {
    Loc: [-6.76134, 107.21031],
    popUp: "Marker 3"
  },

  {
    Loc: [-6.76134, 107.21031],
    popUp: "Marker 4"
  }
]

function App() {
  return (
    <>
    <div className='flex p-4 gap-2.5'>
      <Sidebar />
      <div className="w-[80vw] h-80%">
        <MapContainer center={[-6.761946739265074, 107.20976353938751]} zoom={13} className='w-full'>
          <TileLayer attribution="&copy; <a>adasd</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {Lokasi.map(titik =>(
            <Marker position={titik.Loc}>

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