import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TrashIcon } from '@heroicons/react/24/solid';

function Table() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/data/getAll');
      setData(response.data); // Assuming the data is an array
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/data/delete`, {
        params: {
          id: id
        }
      });
      console.log(`Deleted post with ID ${id}`);
      // Assuming you want to update the data after deletion, you can re-fetch the data or update it in another way.
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <table className="table-auto w-4/5 border-collapse border border-gray-300 mb-20 ml-32 rounded-xl" style={{ tableLayout: 'fixed' }}>
      <thead>
        <tr className="bg-red-500 border-b-2 border-gray-200 text-black">
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '10%' }}>ID</th>
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '15%' }}>Time</th>
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '20%' }}>Name</th>
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '15%' }}>Latitude</th>
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '15%' }}>Longitude</th>
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '15%' }}>Status</th>
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '10%' }}>Action</th>
        </tr>
      </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID} className="odd:bg-blue-100 even:bg-blue-300">
              <td className="p-3 text-sm text-black text-center">{item.ID}</td>
              <td className="p-3 text-sm text-black text-center">{item.Time}</td>
              <td className="p-3 text-sm text-black text-center">{item.Name}</td>
              <td className="p-3 text-sm text-black text-center">{item.Lattitude}</td>
              <td className="p-3 text-sm text-black text-center">{item.Longitude}</td>
              <td className="p-3 text-sm text-black text-center">{item.Status}</td>
              <td className="p-3 text-sm text-black text-center">
                <button onClick={() => handleDelete(item.ID)}>
                  <TrashIcon className="h-10 w-10 p-2 bg-yellow-600 rounded-md hover:bg-yellow-300" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
