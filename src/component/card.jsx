import React from 'react';

function CardView() {
  return (
    <div className="flex flex-row justify-between items-center mb-20 ml-32">
      <div className="flex-1 mr-4">
        <div className="p-4 rounded-lg font-bold text-center text-white bg-green-600 w-72 h-15">
          <h3>Safe</h3>
          <p>Status total: </p>
        </div>
      </div>
      <div className="flex-1 mr-4">
        <div className="p-4 rounded-lg font-bold text-center text-white bg-yellow-600 w-72 h-15">
          <h3>Warning</h3>
          <p>Status total: </p>
        </div>
      </div>
      <div className="flex-1 mr-4">
        <div className="p-4 rounded-lg font-bold text-center text-white bg-red-600 w-72 h-15">
          <h3>SOS</h3>
          <p>Status total: </p>
        </div>
      </div>
    </div>
  );
}

export default CardView;

