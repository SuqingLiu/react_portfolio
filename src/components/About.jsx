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

        <p className="text-xl" mt-5>
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

        <p className="text-xl">
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
        <p className="text-xl">
          PROJECTS:
        </p>
        <br />
        <p className="text-xl">
          <span className="font-bold">"GrandRec" </span>- decentralized history tracking dApp 
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

        {/* <p className="text-xl mt-5">
        Data Science and Analysis: Web Scraped data from the Indeed hiring page for Data scientists, 
        cleaned data for error checks and Graphed to Analysis the change in Average Salary Along the Months
        </p>

        <br />

        <p className="text-xl">
        Machine Learning and Deep Learning: Built an Image Recognition model with YOLO v7 to detect whether the
         front basket of a bicycle contains an object. Build a Sentimental Analysis bot that fetches tweets from Twitter to compare the two input topics.
        </p>
        <br />

        <p className="text-xl">
        Software and Backend Development: Implemented a Bash Shell with C having multiple bash features such as prompt, storing variable, bash commends 
        (exit, echo, ls, cd, cat, wc,) and utilized pipes to make pipeline system calls possible and Masked Signal calls such as kill and ps while Providing
         network connection with socket.
        </p>
        <br />

        <p className="text-xl">
        Blockchain and Web3: created an NFT Brand to promote diversity and inclusion for Asian communities in the Metaverse. Utilized functions that randomize
         attributes with their weight to create an NFT and automated the process of uploading NFT with an auto-click program. Developed a Block Chain program 
         on python with Json to store user’s password and encrypted with hash function and validated with proof of work system
        </p> */}

      </div>
    </div>
  );
};

export default About;
