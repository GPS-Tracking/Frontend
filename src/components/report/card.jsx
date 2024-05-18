import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CardView() {
  const [DataAman, setDataAman] = useState(0);
  const [DataWarning, setDataWarning] = useState(0);
  const [DataSOS, setDataSOS] = useState(0);
  const [DataNull, setDataNull] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:8080/status/aman');
        const jumlahDeviceAman = response1.data[0]?.Jumlah_Device_Aman || 0;
        setDataAman(jumlahDeviceAman);
        
        const response2 = await axios.get('http://localhost:8080/status/warning');
        const jumlahDeviceWarning = response2.data[0]?.Jumlah_Device_Warning || 0;
        setDataWarning(jumlahDeviceWarning);

        const response4 = await axios.get('http://localhost:8080/status/noStatus');
        const jumlahDeviceNull = response4?.data[0]?.Jumlah_Device_noStatus || 0;
        setDataNull(jumlahDeviceNull);
        
        const response3 = await axios.get('http://localhost:8080/status/SOS');
        const jumlahDeviceSOS = response3.data[0]?.Jumlah_Device_SOS || 0;
        setDataSOS(jumlahDeviceSOS);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5 mb-10 p-7">
        <div className="flex flex-col items-center p-4 rounded-lg font-bold text-center text-black bg-green-600 md:w-64 h-15">
          <h3>Aman</h3>
          <p>total: {DataAman}</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg font-bold text-center text-black bg-yellow-600 md:w-64 h-15">
          <h3>Warning</h3>
          <p>total: {DataWarning}</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg font-bold text-center text-black bg-red-600 md:w-64 h-15">
          <h3>SOS</h3>
          <p>total: {DataSOS}</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg font-bold text-center text-black bg-blue-400 md:w-64 h-15">
          <h3>Tanpa Status</h3>
          <p>total: {DataNull}</p>
        </div>
    </div>
  );
}

export default CardView;
