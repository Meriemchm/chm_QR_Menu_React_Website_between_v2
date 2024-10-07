import React, { useRef, useEffect } from "react";
import Menu from "../Menu/Menu";

const Accordion = ({ title, isOpen, onClick }) => {
  const accordionRef = useRef(null);

  useEffect(() => {
    if (isOpen && accordionRef.current) {
      accordionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  return (
    <div ref={accordionRef} className="w-full border-b">
      <button
        onClick={onClick}
        className="flex justify-between w-full items-center py-4"
      >
        <span className="capitalize font-semibold text-second text-2xl md:text-4xl">
          {title}
        </span>
        <svg
          className={`fill-second shrink-0 ml-8 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="transform rotate-90"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "pb-10 opacity-100 h-auto" : "max-h-0 opacity-0 h-0"
        }`}
      >
        {isOpen && <Menu title={title} />}
      </div>
    </div>
  );
};

export default Accordion;
