import React from 'react';

function Table() {
  return (
    <table className="table-auto w-4/5 border-collapse border border-gray-300 mb-20 ml-36">
  <thead>
    <tr className="bg-red-200 text-white">
      <th className="px-4 py-2">ID</th>
      <th className="px-4 py-2">NAMA</th>
      <th className="px-4 py-2">Longitude</th>
      <th className="px-4 py-2">Latitude</th>
      <th className="px-4 py-2">Status</th>
    </tr>
  </thead>
  <tbody>
  <tr className="bg-gray-100 hover:bg-gray-200">
          <td className="border px-4 py-2 text-center">1</td>
          <td className="border px-4 py-2 text-center">Tempat A</td>
          <td className="border px-4 py-2 text-center">34.567</td>
          <td className="border px-4 py-2 text-center">-89.123</td>
          <td className="border px-4 py-2 text-center">Aktif</td>
        </tr>
        <tr className="bg-gray-100 hover:bg-gray-200">
          <td className="border px-4 py-2 text-center">2</td>
          <td className="border px-4 py-2 text-center">Tempat B</td>
          <td className="border px-4 py-2 text-center">12.345</td>
          <td className="border px-4 py-2 text-center">45.678</td>
          <td className="border px-4 py-2 text-center">Tidak Aktif</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;