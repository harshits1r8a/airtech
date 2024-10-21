import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { FcPlanner } from "react-icons/fc";
import { HiMenuAlt1 } from "react-icons/hi";
import LogoCircle from '../../assets/logoCicle.png'
import { useState } from "react";
const navMenue = [
  {
    name: "HOME",
    url: "/",
  },
  {
    name: "ABOUT US",
    url: "/about-us",
  },
  {
    name: "SERVICES",
    url: "/services",
  },
  {
    name: "RESOURCES",
    url: "/resources",
  },
  {
    name: "GALLERY",
    url: "/gallary",
  },
  {
    name: "CONTACT US",
    url: "/contact-us",
  },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header >
      <nav className="hidden lg:flex justify-between items-center h-auto bg-gray-100 relative">
        <div className="absolute  flex items-center py-2  w-[30%] bg-[#e6ebfe] pl-5 z-50"
        style={{
          clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
          boxShadow: '100px 0px 25px rgb(128, 128, 128)',
        }}
        >
          <Logo size={"w-[200px]"} />
        </div>
        <div className=" w-[100%] h-full ">
          <div className="flex justify-between bg-[#2A1768] text-white h-1/2 pr-5 py-2 pl-[10rem]">
            <div className="w-1/3"></div>
            <a href={`tel:1800.568.3248`} className="  flex items-center gap-2">
              <FiPhone className="text-lg" />
              18005683248
            </a>
            <a
              href={`mailto:dummy@dyummy.com`}
              className="  flex items-center gap-2"
            >
              <LuMail className="text-lg" />
              dummy@dyummy.com
            </a>
            <a href={""} className="  flex items-center gap-2">
              <FcPlanner className="text-lg" />
              Scheudule an Appointment
            </a>
          </div>
          <ul className="flex items-center justify-between text-gray-700 h-1/2 pr-5 py-2 pl-[10rem]">
            <div className="w-1/3"></div>
            {navMenue?.map((elm) => (
              <NavLink
                key={elm.name}
                to={elm.url}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 font-medium ${
                    isActive ? "text-[#73afe8]" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#73afe8] lg:p-0`
                }
              >
                <li>{elm.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="lg:hidden ">
        <div className="z-50 relative flex justify-between px-5 py-2 bg-[#2A1768] text-white items-center">
        <HiMenuAlt1 className="text-3xl cursor-pointer" onClick={toggleMenu}/>
        <img src={LogoCircle} alt="airtech" className="w-[45px] rounded-full"/>
        </div>
        <div
        className={`z-10 lg:hidden  bg-slate-200   w-[45%] h-screen absolute left-0 top-0 pt-[4rem] transition-all duration-300 ease-in-out  transform ${
            isOpen ? "translate-x-0" : "-translate-x-[400%]"
          }`}>
            {navMenue?.map((elm) => (
              <NavLink
                key={elm.name}
                to={elm.url}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 font-medium ${
                    isActive ? "text-[#73afe8]" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#73afe8] lg:p-0`
                }
              >
                <li>{elm.name}</li>
              </NavLink>
            ))}
        </div>
      </nav>
    </header>
    
  );
};

export default Header;
