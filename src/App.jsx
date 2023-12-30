import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Sidebar from "/src/component/Sidebar";
import Legenda from "/src/component/main/Legenda";
import MapComponent from "/src/component/main/MapComponent";


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

  const warnaMarker = (status) => {
    switch (status) {
      case "SOS":
        return "red";
      case "Warning":
        return "gold";
      case "Aman":
        return "green";
      default:
        return "blue";
    }
  };

  return (
    <>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className="z-10 h-auto w-full">
          <MapComponent data={data} groupedData={groupedData} warnaMarker={warnaMarker} />
        </div>
        <Legenda />
      </div>
    </>
  );
}

export default App;
