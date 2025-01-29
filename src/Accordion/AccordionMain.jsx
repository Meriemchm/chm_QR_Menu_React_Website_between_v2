import React, { useState } from "react";
import Accordion from "./Accordion";
import { menuLinks, brunchLinks,stylesData } from "../Data/Data";

const AccordionMain = () => {
  const [openId, setOpenId] = useState(null); 

  const handleClick = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center pt-24 pb-20 px-1 sm:px-2 md:px-2 lg:px-12">
      <div className="w-full">
        <div className="flex flex-col space-y-4">
          {/* Section Brunch */}
          <div className="bg-second px-2 md:px-5 rounded-lg">
            <h1 className="text-primary py-3 capitalize text-center text-3xl md:text-5xl">
              Nos Brunchs
            </h1>
            {brunchLinks.map(({ id, title }) => (
              <Accordion
                key={id}
                title={title}
                {...stylesData.brunch}
                choice={false}
                isOpen={openId === id}
                onClick={() => handleClick(id)}
              />
            ))}
          </div>

          {/* Section Menu */}
          <div className="md:px-5 px-1">
            <h1 className="font-thin py-2 text-second capitalize text-center text-4xl md:text-5xl">
              Menu
            </h1>
            {menuLinks.map(({ id, title }) => (
              <Accordion
                key={id}
                title={title}
                {...stylesData.menu}
                choice={true}
                isOpen={openId === id}
                onClick={() => handleClick(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionMain;
