import React from "react";
import DefaultSidebar from "../component/Sidebar";
import ProfileCard from "../component/Biodata";

function About() {
  return (
    <div className="flex">
      <DefaultSidebar />
      <div className="flex flex-wrap justify-start ml-8 mt-[120px]">
        <ProfileCard />
      </div>
    </div>
  );
}

export default About;
