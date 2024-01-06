import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

function Table() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/data/getAll');
      setData(response.data);
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
          id: id,
        },
      });
      console.log(`Deleted post with ID ${id}`);
      const updatedData = data.filter((item) => item.ID !== id);
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/data/updateStatus/${selectedItem.ID}`,
        {
          status: newStatus,
        }
      );
      console.log(`Updated status for ID ${selectedItem.ID}`);
      const updatedData = data.map((item) =>
        item.ID === selectedItem.ID ? { ...item, Status: newStatus } : item
      );
      setData(updatedData);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setNewStatus(item.Status);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setNewStatus('');
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
          <th className="p-3 text-sm font-semibold tracking-wide" style={{ width: '20%' }}>Action</th>
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
                <button onClick={() => openModal(item)}>
                  <PencilIcon className="h-10 w-10 p-2 bg-blue-600 rounded-md hover:bg-blue-300" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for updating status */}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <label className="block mb-2 text-sm font-semibold text-gray-600">Update Status</label>
            <select
              className="w-full p-2 mb-4 border rounded-md"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value === 'null' ? null : e.target.value)}
            >
              <option value="Aman">Aman</option>
              <option value="Warning">Warning</option>
              <option value="SOS">SOS</option>
              <option value="null">Tanpa Status</option>
            </select>
            <button
              onClick={handleUpdateStatus}
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-300"
            >
              Confirm
            </button>
            <button
              onClick={closeModal}
              className="w-full p-2 bg-gray-400 text-white rounded-md hover:bg-gray-300 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
