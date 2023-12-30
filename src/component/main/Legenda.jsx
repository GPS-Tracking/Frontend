import React from 'react';

class Legenda extends React.Component {
  render() {
    return (
      <div className="absolute top-4 right-4 z-50 bg-white p-4 rounded shadow-md md:block">
        <h2 className="text-lg font-semibold mb-2">Legenda</h2>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 mr-2 bg-red-500"></div>
            <span>SOS</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 mr-2 bg-yellow-500"></div>
            <span>Warning</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 mr-2 bg-green-500"></div>
            <span>Aman</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-blue-500"></div>
            <span>Tanpa Status</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Legenda;
