import React from "react";
import DefaultSidebar from "../component/Sidebar";
import CardView from "../component/card";
import Table from "../component/table";

function Data() {
  return (
    <div className="flex mr-auto">
      <div className="flex-none mr-5">
        <DefaultSidebar />
      </div>
      <div className="flex-1 ml-[-120px]">
        <CardView />
        <div className="flex-1 ml-[120px]">
        <Table />
        </div>
      </div>
    </div>
  );
}

export default Data;
