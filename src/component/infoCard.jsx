import React, { useState } from "react";

function Information() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" role="tablist">
          <li className="me-2">
            <button
              onClick={() => handleTabClick("about")}
              type="button"
              className={`inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 ${activeTab === "about" && "bg-gray-100 dark:bg-gray-700"}`}
            >
              About Us
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => handleTabClick("services")}
              type="button"
              className={`inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 ${activeTab === "services" && "bg-gray-100 dark:bg-gray-700"}`}
            >
              Services
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => handleTabClick("statistics")}
              type="button"
              className={`inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 ${activeTab === "statistics" && "bg-gray-100 dark:bg-gray-700"}`}
            >
              Facts
            </button>
          </li>
        </ul>

        <div id="defaultTabContent" className="overflow-hidden">
          <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab !== "about" && "hidden"}`} id="about" role="tabpanel" aria-labelledby="about-tab">
            <div className="overflow-y-auto max-h-12"> {/* Set a max height for overflow */}
              <h2 className="tracking-tight text-gray-900 dark:text-white">
                    Tim kami memiliki keahlian yang terintegrasi untuk menghasilkan produk yang berkualitas.
                    Kami akan senantiasa berkomitmen untuk mengakomodasi setiap kebutuhan client. Memperbaiki setiap layanan yang ada sehingga setiap client mendapatkan kepuasan yang maksimal.
              </h2>
            </div>
          </div>

          <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab !== "services" && "hidden"}`} id="services" role="tabpanel" aria-labelledby="services-tab">
            <div className="overflow-y-auto max-h-12"> {/* Set a max height for overflow */}
              <h2 className="tracking-tight text-gray-900 dark:text-white">
                    <h3>Karya Cipta Anak Negeri</h3>
                    <h3>Perusahaan yang bergerak dalam bidang penyedia ,pembuatan dan pemasangan peralatan kontrol custom .Terdiri atas 6 DIVISI</h3>
                    <ul>
                        <li>1.KONTROL SPESIAL & PROTOTIPE</li>
                        <li>2.IoT dan OTOMASI</li>
                        <li>3.PLTS / SOLAR PANEL</li>
                        <li>4.EWS/DWS ( EARLY WARNING SYSTEM )</li>
                        <li>5.ENERGI (POWER WALL / CHARGING STATION)</li>
                        <li>6.OTOMOTIF DAN TRANSPORTASI (MOTOR&MOBIL LISTRIK,TAXI DRONE)</li>
                    </ul>
              </h2>
            </div>
          </div>

          <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab !== "statistics" && "hidden"}`} id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            <div className="overflow-y-auto max-h-12"> {/* Set a max height for overflow */}
              <h2 className="tracking-tight text-gray-900 dark:text-white">
                    Deskripsi Program
                    Kompetisi Kampus Merdeka
                    Program Kompetisi Kampus Merdeka (PK-KM) merupakan program kompetisi terbuka, dengan sistem seleksi berkelompok (tiered system).
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;