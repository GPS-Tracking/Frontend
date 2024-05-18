import React, { useState } from "react";

function Information() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
       <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" role="tablist">
          <li className="me-2">
            <button
              onClick={() => handleTabClick("about")}
              type="button"
              className={`inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 ${activeTab === "about" && "bg-gray-100 dark:bg-gray-700"}`}
            >
              About Project
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => handleTabClick("parthnership")}
              type="button"
              className={`inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 ${activeTab === "parthnership" && "bg-gray-100 dark:bg-gray-700"}`}
            >
              About us
            </button>
          </li>

        </ul>

        <div id="defaultTabContent">
        <div className={`p-5 bg-white rounded-lg md:p-6 dark:bg-gray-800 ${activeTab !== "about" && "hidden"}`} id="about" role="tabpanel" aria-labelledby="about-tab">
            <div className="">
              <h2 className="tracking-tight text-gray-900 dark:text-white">
                    Website dashboard ini merupakan bagian dari IoT project "MAPS TRACKING NAVIGASI TITIK POINT LOKASI UNTUK PENANGGULANGAN PASCA BENCANA"
              </h2>
              <br />
              <h5>
                Website ini berfungsi untuk menampilkan data dari alat IoT dengan data yang di terima dari MQTT
              </h5>
            </div>
          </div>

          <div className={`p-5 bg-white rounded-lg md:p-6 dark:bg-gray-800 ${activeTab !== "parthnership" && "hidden"}`} id="partnership" role="tabpanel" aria-labelledby="partnership-tab">
            <div className="">
              <h2 className="tracking-tight text-gray-900 dark:text-white">
              <h3>Project ini dibuat oleh :</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul>
                  <li>1. Naufal Maulana Al-Ghifari Irawan - 50420956 - 4IA01</li>
                  <li>2. Ghiyats Ibnu Syahied - 50421557 - 3IA19</li>
                </ul>
              </div>
              </h2>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Information;