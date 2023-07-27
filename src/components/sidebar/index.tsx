import { useState } from "react";
import { HiMenuAlt3, HiOutlineArrowUp, HiOutlineFolder } from "react-icons/hi";
import { FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/retaguarda-convenio/");

  const user = localStorage.getItem("userEncoded");

  return (
    <>
      <div
        className={`bg-[#1C1F2A] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 font-fontPopping shadow-2xl`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <Link to="/retaguarda-convenio/conveniado-pessoa">
            <div
              className={`flex mt-2 group items-center text-sm gap-3.5 font-medium p-2 ${
                splitLocation[1] === "conveniado-pessoa" ? "bg-blue-900" : ""
              } hover:bg-blue-900 rounded-md cursor-pointer`}
            >
              <div>
                <FiFolder size={20} />
              </div>
              <h2
                style={{
                  transitionDelay: `${0 + 3}00ms`
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Conveniado
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Test Item
              </h2>
            </div>
          </Link>
          <Link to="/approach-generator/approach">
            <div
              className={`group flex items-center text-sm  gap-3.5 font-medium p-2 ${
                splitLocation[1] === "approach"
                  ? "bg-blue-900 shadow-inner"
                  : ""
              } hover:bg-blue-900 rounded-md cursor-pointer`}
            >
              <div>
                <HiOutlineFolder size={20} />
              </div>
              <h2
                style={{
                  transitionDelay: `${0 + 3}00ms`
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Approach
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Approach
              </h2>
            </div>
          </Link>
          <Link to="/approach-generator/exportar-approach">
            <div
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 ${
                splitLocation[1] === "exportar-approach" ? "bg-blue-900" : ""
              } hover:bg-blue-900 rounded-md cursor-pointer`}
            >
              <div>
                <HiOutlineArrowUp size={20} />
              </div>
              <h2
                style={{
                  transitionDelay: `${0 + 3}00ms`
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Exportar Modelo
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Exportar Modelo
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};