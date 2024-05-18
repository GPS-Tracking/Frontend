import React from "react";
import DefaultSidebar from "/src/components/Sidebar";
import CardView from "/src/components/report/card"
import Table from "/src/components/report/table";

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