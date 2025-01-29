import React from "react";
import { MenuData } from "../Data/Data";

const Menu = ({ title, styleone, styletwo, stylethree }) => {
  const Data = MenuData.filter((item) => item.category === title);

  return (
    <div className=" flex flex-col justify-center md:items-center items-start w-full  h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full text-center justify-center items-center">
        {Data.map(({ id, src, name, price, ingredients }) => {
          return (
            <div
              key={id}
              className={`flex flex-col border-b ${styleone} py-5 h-full md:w-full`}
            >
              <div className="flex flex-row gap-4 md:gap-2 w-full">
                <img
                  src={src}
                  alt=""
                  className="rounded-md md:w-44 md:h-32 w-36 h-28 object-cover mt-5"
                  loading="lazy"
                />

                <div className="flex flex-col items-start justify-start flex-grow w-1/2  text-gray-800 md:mx-5 my-4">
                  <p className={`menu_name md:text-lg font-bold capitalize py-2 ${styletwo}`}>
                    {name}
                  </p>
                  <p className={` ${stylethree} text-start font-extralight py-2 text-sm md:text-base`}>
                    {ingredients}
                  </p>
                  <p className={`font-bold ${stylethree}`}>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
