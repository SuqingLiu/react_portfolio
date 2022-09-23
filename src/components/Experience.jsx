import React from "react";

import python from "../assets/python.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import aws from "../assets/aws.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import tensorFlow from "../assets/tensorFlow.png";
import c from "../assets/c.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: java,
      title: "JAVA",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tensorFlow,
      title: "TensorFlow",
      style: "shadow-orange-400",
    },
    {
      id: 6,
      src: aws,
      title: "AWS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: c,
      title: "C/C++",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-cyan-600 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-8"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
