import React from "react";
import DefaultSidebar from "/src/component/Sidebar";
import CardView from "/src/component/report/card"
import Table from "/src/component/report/table";

function Data() {
  return (
    <div className="flex">
      <DefaultSidebar />

      <div>
        <CardView />
        <Table />
      </div>
    
    </div>
  );
}

export default Data;