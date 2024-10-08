import React from "react";
import { MenuData } from "../Data/Data";

const Menu = ({ title }) => {
  const Data = MenuData.filter((item) => item.category === title);

  return (
    <div className=" flex flex-col justify-center md:items-center items-start w-full md:px-5 px-1 h-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full md:w-auto text-center justify-center items-center">
        {Data.map(({ id, src, name, price }) => {
          return (
            <div
              key={id}
              className="flex flex-row border-b border-white py-5  md:w-96"
            >
              <img
                src={src}
                alt=""
                className="rounded-md w-44 h-32 object-cover mt-5"
                loading="lazy"
              />

              <div className="flex flex-col items-start justify-start text-gray-800 md:mx-5 my-4 ">
                <p className=" menu_name text-base md:text-lg font-bold capitalize ml-2 md:ml-0  py-2 text-second">
                  {name}
                </p>
                <p className="font-bold mx-2 md:mx-0 text-white">{price}</p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Menu;
