import React from "react";
import { Card } from "@material-tailwind/react";
import DefaultSidebar from "/src/components/Sidebar";
import CardView from "/src/components/report/card";
import Table from "/src/components/report/table";

function Data() {
  return (
    <div className="flex h-screen w-screen">
      <DefaultSidebar />
      <Card className="flex flex-col flex-grow p-5 shadow-xl shadow-blue-gray-900/5">
        <div className="flex justify-around p-4">
          <CardView />
        </div>
        <div className="flex-grow overflow-auto p-4">
          <Table />
        </div>
      </Card>
    </div>
  );
}

export default Data;
