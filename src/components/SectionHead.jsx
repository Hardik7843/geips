/* eslint-disable react/prop-types */
import React from "react";

const SectionHead = ({ title }) => {
  return (
    <div className="flex justify-start mb-3 bg-gray-200">
      <div className="border-4 border-blue-500"></div>
      <p className="w-fit p-1.5">{title}</p>
    </div>
  );
};

export default SectionHead;
