import React from "react";
import DefaultSidebar from "../components/Sidebar";
import Tanggal from "../components/history/tanggal";
import TableHistory from "/src/components/history/tableHistory";

function History() {
  return (
    <div className="flex">
      <DefaultSidebar />

      <div className="flex flex-wrap justify-center h-full">
        {/* Use TableHistory instead of Tanggal */}
        <TableHistory />
      </div>

      {/* Remove the unused Tanggal component */}
      <Tanggal />
    </div>
  );
}

export default History;