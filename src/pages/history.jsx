import React from "react";
import DefaultSidebar from "../component/Sidebar";
import Tanggal from "../component/history/tanggal";
import TableHistory from "/src/component/history/tableHistory";


function History() {
    return(
        <div className="flex">
            <DefaultSidebar />

            <div className="flex flex-wrap justify-center h-full">
                <Tanggal/>
                <div className="p-5">
                    <TableHistory/>
                </div>
            </div>
            
        </div>
    )
}

export default History;
