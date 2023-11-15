import { MapContainer, TileLayer } from 'react-leaflet';
// import { useState } from 'react'
import Sidebar from "../src/component/Sidebar"
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
    <div className='flex gap-5'>
      <Sidebar />
      <div className="w-[80vw] h-80%">
        <MapContainer center={[-6.761946739265074, 107.20976353938751]} zoom={13} className='w-full'>
          <TileLayer attribution="&copy; <a>adasd</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>

      </div>
    </div>
    </>
  );
}

export default App;