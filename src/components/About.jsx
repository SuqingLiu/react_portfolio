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
            About
          </p>
        </div>

        <p className="text-xl mt-20">
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
        </p>

      </div>
    </div>
  );
};

export default About;
