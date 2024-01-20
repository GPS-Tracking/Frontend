import React from "react";
import DefaultSidebar from "../components/Sidebar";
import Tanggal from "../components/history/tanggal";
import TableHistory from "/src/components/history/tableHistory";

function History() {
  return (
    <div className="flex">
      <DefaultSidebar />

      <div className="flex flex-wrap justify-center h-full">
        <Tanggal />
      </div>

      <div className="p-2">
        <TableHistory />
      </div>
    </div>
  );
}

export default History;
