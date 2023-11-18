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
  }, []); 

  return (
  <div>
    <table className="table-auto w-4/5 border-collapse border border-gray-300 mb-20 ml-36 rounded-xl">
  <thead>
    <tr className="bg-red-200 border-b-2 border-gray-200 text-white">
      <th className="p-3 text-sm font-semibold tracking-wide">ID</th>
      <th className="p-3 text-sm font-semibold tracking-wide">NAMA</th>
      <th className="p-3 text-sm font-semibold tracking-wide">Longitude</th>
      <th className="p-3 text-sm font-semibold tracking-wide">Latitude</th>
      <th className="p-3 text-sm font-semibold tracking-wide">Status</th>
    </tr>
  </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="odd:bg-[#DFD3C3] even:bg-[#D0B8A8]">
            <td className="p-3 text-sm text-white text-center">{item.ID}</td>
            <td className="p-3 text-sm text-white text-center">{item.Time}</td>
            <td className="p-3 text-sm text-white text-center">{item.Name}</td>
            <td className="p-3 text-sm text-white text-center">{item.Lattitude}</td>
            <td className="p-3 text-sm text-white text-center">{item.Longitude}</td>
            <td className="p-3 text-sm text-white text-center">{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Table;
