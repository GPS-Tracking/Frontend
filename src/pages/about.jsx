import React from "react";
import DefaultSidebar from "/src/components/Sidebar";
import ProfileCard from "/src/components/about/Biodata";
import Information from "/src/components/about/Information";

function About() {
  return (
    <div className="flex">
      <DefaultSidebar />
      <div className="flex flex-wrap justify-center p-5 h-full">
        <ProfileCard />
        <Information />
      </div>
    </div>
  );
}

export default About;
