import React from "react";
import DefaultSidebar from "../component/Sidebar";
import ProfileCard from "../component/Biodata";
import Information from "../component/Information";

function About() {
  return (
    <>
      <div className="flex">
        <DefaultSidebar />
        <div className="flex flex-wrap justify-center p-5 h-full">
          <ProfileCard />
          <Information />
        </div>
      </div>
    </>
  );
}

export default About;
