import React from "react";
import DefaultSidebar from "../component/Sidebar";
import CardView from "../component/card";

function Data() {
  return (
    <div className="flex mr-auto">
      <div className="flex-none mr-5">
        <DefaultSidebar />
      </div>
      <div className="flex-1 ml-4">
        <CardView />
      </div>
    </div>
  );
}

export default Data;
