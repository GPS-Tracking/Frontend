import React from "react";
import DefaultSidebar from "../component/Sidebar";


function History() {
    return(
        <div className="flex">
            <DefaultSidebar />
            <div className="flex flex-wrap justify-center p-5 h-full">
                <h1>ini halaman history</h1>
            </div>
        </div>
    )
}

export default History;
