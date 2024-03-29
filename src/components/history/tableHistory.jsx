import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function TableHistory({ startDate, endDate }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const columns = [
    {
      name: 'ID',
      selector: 'ID',
      sortable: true,
      width: '10%',
    },
    {
      name: 'Time',
      selector: 'Time',
      sortable: true,
      width: '15%',
    },
    {
      name: 'Name',
      selector: 'Name',
      sortable: true,
      width: '20%',
    },
    {
      name: 'Latitude',
      selector: 'Latitude',
      sortable: true,
      width: '15%',
    },
    {
      name: 'Longitude',
      selector: 'Longitude',
      sortable: true,
      width: '15%',
    },
    {
      name: 'Status',
      selector: 'Status',
      sortable: true,
      width: '15%',
    },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("Fetching data with startDate:", startDate, "and endDate:", endDate);
      const response = await fetch(`/api/data/getFilteredData?start=${tanggalAwal}&end=${tanggalAkhir}`);
      const data = await response.json();
      console.log("Fetched data:", data);
      setData(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };  

  useEffect(() => {
    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && data.length > 0 && (
        <DataTable
          title="Filtered Data"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          responsive
        />
      )}
    </div>
  );
}

export default TableHistory;