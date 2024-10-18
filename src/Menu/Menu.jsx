import React from "react";
import { MenuData } from "../Data/Data";

const Menu = ({ title }) => {
  const Data = MenuData.filter((item) => item.category === title);

  return (
    <div className=" flex flex-col justify-center md:items-center items-start w-full md:px-5 h-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full md:w-auto text-center justify-center items-center">
        {Data.map(({ id, src, name, price, ingredients }) => {
          return (
            <div
              key={id}
              className="flex flex-col border-b border-white py-5  md:w-96"
            >
              <div className="flex flex-row gap-4 md:gap-0">
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-44 h-32 object-cover mt-5"
                  loading="lazy"
                />

                <div className="flex flex-col items-start justify-start text-gray-800 md:mx-5 my-4  ">
                  <p className=" menu_name text-lg font-bold capitalize py-2 text-second">
                    {name}
                  </p>
                  <p className="font-bold  text-white">{price}</p>
                </div>
              </div>
              {ingredients && ingredients.trim() !== "" ? (
                <p className="text-white text-start pt-5 font-extralight">
                 <span className="text-black text-start pt-5 font-bold"> Ingredients :</span>  {ingredients} .
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
