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
    <table className="table-auto w-4/5 border-collapse border border-gray-300 mb-20 ml-36">
      <thead>
        <tr className="bg-red-200 text-white">
          <th className="px-4 py-2">No</th>
          <th className="px-4 py-2">Waktu</th>
          <th className="px-4 py-2">Nama Device</th>
          <th className="px-4 py-2">Latitude</th>
          <th className="px-4 py-2">Longitude</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="bg-gray-100 hover:bg-gray-200">
            <td className="border px-4 py-2 text-center">{item.ID}</td>
            <td className="border px-4 py-2 text-center">{item.Time}</td>
            <td className="border px-4 py-2 text-center">{item.Name}</td>
            <td className="border px-4 py-2 text-center">{item.Lattitude}</td>
            <td className="border px-4 py-2 text-center">{item.Longitude}</td>
            <td className="border px-4 py-2 text-center">{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
