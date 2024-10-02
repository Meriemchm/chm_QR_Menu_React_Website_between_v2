// src/App.js
import React from "react";
import Accordion from "./Accordion";
import { menuLinks } from "../Data/Data";

const Questions = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center pt-24 pb-20 px-2 md:px-0  ">
      <div className="mx-auto">
          <div className="flex flex-col">
            {menuLinks.map(({ id,title }) => (
              <Accordion key={id} title={title} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Questions;
