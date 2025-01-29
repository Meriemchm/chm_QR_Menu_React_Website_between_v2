import React, { useRef, useEffect } from "react";
import Menu from "../Menu/Menu";
import BrunchMenu from "../Menu/BrunchMenu";

const Accordion = ({
  title,
  isOpen,
  onClick,
  choice,
  styleone,
  styletwo,
  stylethree,
  stylefour,
}) => {
  const accordionRef = useRef(null);

  useEffect(() => {
    if (isOpen && accordionRef.current) {
      const elementPosition = accordionRef.current.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - 100;
      window.scrollTo({
        top: offsetPosition,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <div ref={accordionRef} className={`w-full border-b ${styleone}`}>
      <button
        onClick={onClick}
        className="flex justify-between w-full items-center py-4  "
      >
        <span
          className={`capitalize font-semibold text-2xl md:text-4xl ${
            isOpen
              ? `${styletwo} text-2xl md:text-4xl`
              : `bg-transparent text-xl md:text-3xl ${styletwo}`
          }`}
        >
          {title}
        </span>
        <svg
          className={`shrink-0 ml-8 transform transition-transform duration-300 ${stylefour} ${
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
        className={` overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "pb-10 opacity-100 h-auto" : "max-h-0 opacity-0 h-0"
        }`}
      >
        {isOpen &&
          (choice ? (
            <>
              <Menu
                title={title}
                styleone={styleone}
                styletwo={styletwo}
                stylethree={stylethree}
              />
            </>
          ) : (
            <BrunchMenu
              title={title}
              styleone={styleone}
              styletwo={styletwo}
              stylethree={stylethree}
            />
          ))}
      </div>
    </div>
  );
};

export default Accordion;
