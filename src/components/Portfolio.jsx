import React from "react";
import yoloBike from "../assets/portfolio/yoloBike.jpg";
import bash from "../assets/portfolio/bash.jpg";
import budgetApp from "../assets/portfolio/budgetApp.jpg";
import twitterBot from "../assets/portfolio/twitterBot.jpg";
import asios from "../assets/portfolio/asios.jpg";
import blockchain from "../assets/portfolio/blockchain.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: yoloBike,
      name: "ImageRecogBike",
      web1: "https://github.com/SuqingLiu",
    },
    {
      id: 2,
      src: twitterBot,
      name: "TwitterCompareBot",
      web1: "https://github.com/SuqingLiu/SentimentalAnalysisWithML_DS",
    },
    {
      id: 3,
      src: budgetApp,
      name: "BudgetApp",
      web1: "https://master.d10p8c70ts7q8l.amplifyapp.com/",
    },
    {
      id: 4,
      src: asios,
      name: "myNFTbrand",
      web1: "https://www.asios-studio.com/",
    },
    {
      id: 5,
      src: bash,
      name: "BashShellImplement",
      web1: "https://github.com/SuqingLiu",
    },
    {
      id: 6,
      src: blockchain,
      name: "BlockChainPassword",
      web1: "https://github.com/SuqingLiu",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-white to-cyan-600 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, web1 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={web1} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{name}</button>
                </a>
                  

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
