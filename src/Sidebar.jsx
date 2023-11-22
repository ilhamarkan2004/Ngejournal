import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GrTask } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { HiBeaker } from "react-icons/hi";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <RxDashboard size={20} className="mr-4" />, text: "Dashboard" },
    { icon: <HiBeaker size={20} className="mr-4" />, text: "Research" },
    { icon: <GrTask size={20} className="mr-4" />, text: "Task" },
    { icon: <GrResources size={20} className="mr-4" />, text: "Resource" },
    { icon: <BiLogOut size={20} className="mr-4" />, text: "Logout" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Nge<span className="font-bold">Journal</span>
        </h1>
      </div>

      {/* Search Input */}
      {/* <div className="bg-gray-200 rounded-lg flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Research"
        />
      </div> */}
      {/* Cart button */}
      {/* <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
        <BsFillCartFill size={20} className="mr-2" /> Logout
      </button> */}

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[260px] h-screen bg-[#000842] z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-[#000842] z-10 duration-500"
        }
      >
        <FaCircleChevronLeft
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute -right-3 top-4  cursor-pointer text-white "
        />
        {/* right-4 top-6 */}
        <h2 className="text-2xl p-4 text-white">
          Nge <span className="font-bold">Journal</span>
        </h2>
        <nav>
          <ul className="flex flex-col mt-2 text-slate-200">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-2.5">
                  <li className="text-sm flex cursor-pointer font-serif  w-[60%] rounded-full mx-auto p-2 hover:text-orange-600 hover:bg-white">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;