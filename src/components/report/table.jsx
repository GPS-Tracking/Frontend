import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { DocumentIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

function Table() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showCatatanModal, setShowCatatanModal] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const [newCatatan, setNewCatatan] = useState('');

  const handleUpdateCatatan = async () => {
      try {
          const response = await axios.put(
              `http://localhost:8080/data/updateCatatan/${selectedItem.ID}`,
              {
                  catatan: newCatatan,
              }
          );
          console.log(`Updated catatan for ID ${selectedItem.ID}`);
          const updatedData = data.map((item) =>
              item.ID === selectedItem.ID ? { ...item, Catatan: newCatatan } : item
          );
          setData(updatedData);
          closeCatatanModal();
      } catch (error) {
          console.error(error);
      }
  };

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
    setShowDeleteConfirmation(true);
    setDeleteItemId(id);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/data/delete`, {
        params: {
          id: deleteItemId,
        },
      });
      console.log(`Deleted post with ID ${deleteItemId}`);
      const updatedData = data.filter((item) => item.ID !== deleteItemId);
      setData(updatedData);
      setShowDeleteConfirmation(false);
      setDeleteItemId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setDeleteItemId(null);
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
      closeStatusModal();
    } catch (error) {
      console.error(error);
    }
  };

  const openStatusModal = (item) => {
    setSelectedItem(item);
    setNewStatus(item.Status);
    setShowStatusModal(true);
  };

  const closeStatusModal = () => {
    setSelectedItem(null);
    setNewStatus('');
    setShowStatusModal(false);
  };

  const openCatatanModal = (item) => {
    setSelectedItem(item);
    setNewCatatan(item.Catatan || '');
    setShowCatatanModal(true);
  };

  const closeCatatanModal = () => {
    setSelectedItem(null);
    setNewCatatan('');
    setShowCatatanModal(false);
  };

  const columns = [
    { name: 'ID', selector: 'ID', sortable: true, width: '8%' },
    { name: 'Time', selector: 'Time', sortable: true, width: '15%' },
    { name: 'Name', selector: 'Name', sortable: false, width: '8%' },
    { name: 'Latitude', selector: 'Lattitude', sortable: false, width: '10%' },
    { name: 'Longitude', selector: 'Longitude', sortable: false, width: '10%' },
    { name: 'Status', selector: 'Status', sortable: false, width: '10%' },
    { name: 'Catatan', selector: 'Catatan', sortable: false, width: '25%',
      cell: (row) => (
        <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
          {row.Catatan}
        </div>
      ),
    },
    {
      name: 'Action', width: '15%',
      cell: (row) => (
        <div>
          <button onClick={() => openStatusModal(row)}>
            <PencilSquareIcon className="h-7 w-7 p-1 bg-blue-600 rounded-md hover:bg-blue-300" />
          </button>
          <button onClick={() => openCatatanModal(row)}>
            <DocumentIcon className="h-7 w-7 p-1 bg-yellow-600 rounded-md hover:bg-yellow-300" />
          </button>
          <button onClick={() => handleDelete(row.ID)}>
            <TrashIcon className="h-7 w-7 p-1 bg-red-600 rounded-md hover:bg-red-300" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-5 align-middle">
      <DataTable
        title="Tabel Tracking"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        noHeader
        className="bg-white shadow-md rounded-md"
        customStyles={{
          headCells: {
            style: {
              textAlign: 'center',
            },
          },
        }}
      />

      {/* Modal for updating status */}
      {showStatusModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <label className="block mb-2 text-sm font-semibold text-gray-600">Update Status</label>
            <select
              className="w-full p-2 mb-4 border rounded-md"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value === 'null' ? null : e.target.value)}
            >
              <option value="---">Pilih Status</option>
              <option value="AMAN">Aman</option>
              <option value="WARNING">Warning</option>
              <option value="SOS">SOS</option>
              <option value="null">Tanpa Status</option>
            </select>
            <button
              onClick={handleUpdateStatus}
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-300"
            >
              Ya
            </button>
            <button
              onClick={closeStatusModal}
              className="w-full p-2 bg-gray-400 text-white rounded-md hover:bg-gray-300 mt-2"
            >
              Batal
            </button>
          </div>
        </div>
      )}


      {/* Confirmation Modal for delete */}
      {showDeleteConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <p className="mb-4 text-sm font-semibold text-gray-600">
              Apakah Kamu ingin menghapus data ini ?
            </p>
            <button
              onClick={confirmDelete}
              className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-300"
            >
              Ya
            </button>
            <button
              onClick={cancelDelete}
              className="w-full p-2 bg-gray-400 text-white rounded-md hover:bg-gray-300 mt-2"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Modal for updating Catatan */}
      {showCatatanModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-md">
                <label className="block mb-2 text-sm font-semibold text-gray-600">Update Catatan</label>
                <textarea
                    className="w-full p-2 mb-4 border rounded-md"
                    value={newCatatan}
                    onChange={(e) => setNewCatatan(e.target.value)}
                />
                <button
                    onClick={handleUpdateCatatan}
                    className="w-full p-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-300"
                >
                    Ya
                </button>
                <button
                    onClick={closeCatatanModal}
                    className="w-full p-2 bg-gray-400 text-white rounded-md hover:bg-gray-300 mt-2"
                >
                    Batal
                </button>
            </div>
        </div>
    )}
    </div>
  );
}

export default Table;