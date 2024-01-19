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
      const response = await axios.get('/api/data/getFilteredData', {
        params: {
          start: startDate,
          end: endDate,
        },
      });
      setData(response.data);
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
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DataTable
        title="Filtered Data"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
}

export default TableHistory;
