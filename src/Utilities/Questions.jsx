// src/App.js
import React, { useState } from "react";
import Accordion from "./Accordion";
import { menuLinks } from "../Data/Data";

const Questions = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center pt-24 pb-20 px-2 md:px-0">
      <div className="mx-auto w-full items-center justify-center md:px-80 ">
        <div className="flex flex-col ">
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

export default Questions;
