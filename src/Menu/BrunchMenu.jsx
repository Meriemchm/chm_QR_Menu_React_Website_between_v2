import React from "react";
import { MenuData, brunchImage } from "../Data/Data";

const BrunchMenu = ({ title, styleone, styletwo, stylethree }) => {
  const Data = MenuData.filter((item) => item.category === title);
  const categoryImage = brunchImage.find((img) => img.title === title); 

  return (
    <div className="flex flex-row md:flex-row justify-center items-start w-full h-full gap-4">
      {/* Image unique pour la catégorie (à gauche) */}
      {categoryImage && (
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={categoryImage.src}
            alt={categoryImage.title}
            className="rounded-md object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Liste des plats (à droite) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 w-full text-center">
        {Data.map(({ id, name, ingredients }) => (
          <div
            key={id}
            className={`flex flex-col h-full md:w-full`}
          >
            <div className="flex flex-row gap-4 md:gap-2 w-full">
              <div className="flex flex-col items-start justify-start flex-grow w-1/2 md:mx-5 text-gray-800">
                <p
                  className={`md:text-lg font-bold capitalize py-2 ${styletwo}`}
                >
                  {name}
                </p>
                <p
                  className={`text-start font-extralight py-2 text-sm md:text-base ${stylethree}`}
                >
                  {ingredients}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrunchMenu;
