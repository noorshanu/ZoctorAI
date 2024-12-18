import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsTwitterX, BsInstagram, BsFacebook, BsTelegram } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  py-2  w-full z-40 absolute">
      <div className=" container-wrapper mx-auto  flex justify-between items-center    pb-1 " 
      
      data-aos="fade-down"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="images/logo.png" className="h-[90px]" alt=" Logo" />
          </a>
        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <a
            href="/"
            className="text-white font-bold text-lg px-3 py-2 font-archo cursor-pointer"
          >
            Home
          </a>
          <a href="#about" className="text-white font-bold text-lg px-3 py-2 cursor-pointer">
           About us
          </a>
          <a href="#services" className="text-white font-bold text-lg px-3 py-2 cursor-pointer">
            Services
          </a>

         
          <a href="#contact" className="text-white font-bold text-lg px-3 py-2 cursor-pointer">
            Contact us
          </a>
        </div>

        {/* Wallet Connect button */}
        <div className="md:flex items-center">
          <div className=" flex items-center gap-4 text-white  ml-5">
            <a
              href="/login" target="_blank"
              className="  shadow-xl   py-2 px-4 font-archo text-center text-base rounded-3xl font-manbold font-bold   bg-[#005dff] hover:bg-[#0000] hover:border flex items-center gap-2 "
            >
              {" "}
           Login
            </a>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-black rounded-2xl border-2 border-[#000] px-2 pt-2 pb-3 space-y-1 m-4"
          >
            <a
              href="/"
              className="text-white font-bold text-lg block px-3 py-2"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-white font-bold text-lg block px-3 py-2"
            >
              About us
            </a>
            <a
              href="#services"
              className="text-white font-bold text-lg block px-3 py-2"
            >
           Services
            </a>

            <div className=" flex items-center gap-4 text-white mb-6 ml-5">
              <a
                href="https://twitter.com/Mark_8_"
                className=" text-xl text-white bg-black hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <BsTwitterX />
              </a>

              <a
                href="https://t.me/Mark8_Announcements"
                target="_blank"
                rel="noreferrer"
                className=" text-xl text-white bg-black hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
