import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experiences
          </p>
        </div>

        <p className="text-xl mt-3 animate-bounce">
          CERTIFICATES:
        </p>
        <br />
        <p className="text-xl">
          <span className="font-bold">AWS </span>Certified Solutions Architect - Associate
          <br />
          <span className="font-bold">AWS </span>Certified Cloud Practitioner
          <br />
          <span className="font-bold">Google </span>Data Analysis Certification
        </p>
        <br />

        <p className="text-xl animate-bounce">
          INTERNSHIPS:
        </p>
        <br />
        <p className="text-xl">
          <span className="font-bold">Blockchain/Software Developer Intern</span> at
          <span className="font-bold"> Uniblock</span> [May 2023 - Sep 2023]
          <br />
          <span className="font-bold">Algorithms and Data Structures Research Assistant</span> at
          <span className="font-bold"> University of Toronto</span> [Jun 2022 - Aug 2022]
          <br />
          <span className="font-bold">Project Manager Intern</span> at
          <span className="font-bold"> JD.COM</span> [Jun 2021 - Sep 2021]
        </p>
        <br />
        <p className="text-xl animate-bounce">
          PROJECTS:
        </p>
        <br />
        <p className="text-xl">
          <span className="font-bold">"GrandRec" </span>- Immutable history tracking dApp 
          <br />
          <span className="font-bold">"The Ride" </span>- free market type tutoring website
          <br />
          <span className="font-bold">"Foodies Combine" </span>- food recipe sharing website
          <br />
          <span className="font-bold">"Asios" </span>- NFT brand inspired by Asian culture 
          <br />
          <span className="font-bold">"Bicycle Basket Watcher" </span>- Image Recognition with YOLO V5
          <br />
          <span className="font-bold">"Twitter Compare" </span>- Sentimental Analysis Bot Using Twitter API
        </p>
        <br />

      </div>
    </div>
  );
};

export default About;
