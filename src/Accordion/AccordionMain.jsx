// src/App.js
import React, { useState } from "react";
import Accordion from "./Accordion";
import { menuLinks } from "../Data/Data";

const AccordionMain = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center pt-24 pb-20 px-2 sm:px-4 md:px-10 lg:px-20">
      <div className="w-full ">
        <div className="flex flex-col space-y-4">
          {menuLinks.map(({ id, title }) => (
            <Accordion
              key={id}
              title={title}
              isOpen={openAccordionId === id}
              onClick={() => handleAccordionClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionMain;
