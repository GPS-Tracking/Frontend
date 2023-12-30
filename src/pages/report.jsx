import React from "react";
import DefaultSidebar from "/src/component/Sidebar";
import Report from "/src/component/report/Report";

function Data() {
  return (
    <div className="flex">
      <DefaultSidebar />
      <Report />
    </div>
  );
}

export default Data;