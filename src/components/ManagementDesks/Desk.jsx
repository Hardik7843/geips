/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Desk = ({ title, image, name, designation, text1, text2, regards }) => {
  return (
    <div className="borde borde-black w-full">
      <div className=" flex justify-start mb-3 bg-gray-200">
        <div className=" border-4 border-blue-500"></div>
        <p className="w-fit p-1.5">{title}</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 flex flex-col items-start borde">
          <div className="w-full relative aspect-square">
            <img
              src={image}
              alt="person"
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="px-5 sm:px-0 w-full flex flex-col items-center sm:items-start md:items-center">
            <p className="text-blue-500 font-sans text-xl font-bold">{name}</p>
            <p className="font-bold text-lg">{designation}</p>
          </div>
        </div>

        <div className="text-black w-full md:w-3/4 text-justify break-keep borde pt-5 sm:px-8">
          {text1}
        </div>
      </div>

      <div className="mt-3.5">
        <div className="flex flex-col md:px-2 md:pr-8 space-y-3.5">
          {text2?.map((paragraph, index) => (
            <div key={index} className="w-full break-words text-justify">
              <p className="w-full">{paragraph}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 md:px-2">
          {regards && (
            <p>
              Regards,
              <br />
              <span className="font-bold">{regards}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desk;
