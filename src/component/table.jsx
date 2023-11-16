import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Table() {
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
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="p-6 bg-red-200 rounded-lg">
    <div className="flex justify-between items-center pb-4">
      <h2 className="text-xl font-semibold leading-loose text-white">Last Report</h2>
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-sm font-semibold text-white">
          <th className="py-4 border-b border-white text-center">No</th>
          <th className="py-4 border-b border-white text-center">Waktu</th>
          <th className="py-4 border-b border-white text-center">Nama Device</th>
          <th className="py-4 border-b border-white text-center">Latitude</th>
          <th className="py-4 border-b border-white text-center">Longitude</th>
          <th className="py-4 border-b border-white text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-sm font-semibold text-white">
            <td className="text-sm font-semibold text-white">{item.ID}</td>
            <td className="text-sm font-semibold text-white">{item.Time}</td>
            <td className="text-sm font-semibold text-white">{item.Name}</td>
            <td className="text-sm font-semibold text-white">{item.Lattitude}</td>
            <td className="text-sm font-semibold text-white">{item.Longitude}</td>
            <td className="text-sm font-semibold text-white">{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Table;
