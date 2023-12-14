import React, { useEffect, useState } from 'react';
import Sidebar from "../src/component/Sidebar";
import './App.css';
import axios from 'axios';
import MapComponent from '../src/component/MapComponent';

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

  // Grouping titik gps by nama
  const groupedData = {};
  data.forEach(titik => {
    if (!groupedData[titik.Name]) {
      groupedData[titik.Name] = [];
    }
    groupedData[titik.Name].push([titik.Lattitude, titik.Longitude]);
  });

  const warnaMarker = (index) => {
    const colors = ["red", "gold", "green", "blue", "violet"];
    return colors[index % colors.length];
  }

  return (
    <>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className="h-auto w-full">
          <MapComponent data={data} groupedData={groupedData} warnaMarker={warnaMarker} />
        </div>
      </div>
    </>
  );
}

export default App;
