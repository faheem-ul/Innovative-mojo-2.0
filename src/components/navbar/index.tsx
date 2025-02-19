"use client";
import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

import { cn } from "@/lib/utils";
import Drawer from "../ui/Drawer";
import Button from "../ui/Button";

import logo from "@/public/logo.svg";
import line from "@/public/icons/Line.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const currentPathname = usePathname();
  // console.log(currentPathname);

  //   const [ServicesToggle, setServicesToggle] = useState(false);
  //   const [BooknowToggle, setBooknowToggle] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  //   const handleServicesToggle = () => {
  //     setServicesToggle(!ServicesToggle);
  //     setBooknowToggle(false);
  //   };

  //   const handleBooknowToggle = () => {
  //     setBooknowToggle(!BooknowToggle);
  //     setServicesToggle(false);
  //   };

  return (
    <div className="relative">
      <nav className="absolute min-h-[134px] mob:min-h-max z-50  w-full px-5">
        <div className="flex justify-center items-center w-full min-h-[134px] mob:min-h-max">
          <div className=" max-w-[1313.5px] mob:min-h-max w-full flex flex-wrap items-center justify-between mx-auto py-4">
            <div className="flex justify-between w-full pb-4 items-center">
              <Link
                href="/"
                className="flex mob:max-w-[182px] mob:justify-start space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src={logo}
                  alt="Flowbite Logo"
                  width={380}
                  height={170}
                  className="w-[71%] mob:w-[98%]"
                />
              </Link>
              <div className="flex xl:pr-4 xl:hidden  pt-4">
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <div className="flex gap-[116px]">
                    {/* Your menu options */}
                    <ul className="font-normal mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[5px] md:flex-row  rtl:space-x-reverse md:mt-0  tab:bg-black">
                      <li className="flex">
                        <Link
                          href="/"
                          className="block  text-[18px] font-poppins font-normal leading-[25.5px] text-primary"
                        >
                          Home
                        </Link>
                        <Image src={line} alt="line" />
                      </li>
                      <li className="relative group flex">
                        <Link
                          href="/services"
                          className="block text-[18px] font-poppins font-normal leading-[25.5px] text-primary"
                        >
                          Projects
                        </Link>
                        <Image src={line} alt="line" />
                        {/* Dropdown menu */}
                        {/* <ul className="absolute left-0 rounded-[6px] hidden mt-2 w-[180px] top-[18px] bg-[#f1f1f1] text-black shadow-md group-hover:block">
                          <li className="">
                            <Link
                              href="/genral-dentistry"
                              className={cn(
                                "block px-2 py-[10px] font-fire text-[18px]",
                                currentPathname === "/genral-dentistry"
                                  ? "text-[#20B4CE]"
                                  : ""
                              )}
                            >
                              Family Dentistry
                            </Link>
                          </li>
                          <hr className="bg-[#20B4CE] border-[#20B4CE] border-opacity-10" />
                          <li className="">
                            <Link
                              href="/invisalign"
                              className={cn(
                                "block px-2 py-[10px] font-fire text-[18px]",
                                currentPathname === "/invisalign"
                                  ? "text-[#20B4CE]"
                                  : ""
                              )}
                            >
                              Invisalign
                            </Link>
                          </li>
                          <hr className="bg-[#20B4CE] border-[#20B4CE] border-opacity-10" />
                          <li className="">
                            <Link
                              href="/pediatrics"
                              className={cn(
                                "block px-2 py-[10px] font-fire text-[18px]",
                                currentPathname === "/pediatrics"
                                  ? "text-[#20B4CE]"
                                  : ""
                              )}
                            >
                              Pediatrics
                            </Link>
                          </li>
                          <hr className="bg-[#20B4CE] border-[#20B4CE] border-opacity-10" />
                          <li className="">
                            <Link
                              href="/dental-implants"
                              className={cn(
                                "block px-2 py-[10px] font-fire text-[18px]",
                                currentPathname === "/dental-implants"
                                  ? "text-[#20B4CE]"
                                  : ""
                              )}
                            >
                              Dental Implants
                            </Link>
                          </li>
                          <hr className="bg-[#20B4CE] border-[#20B4CE] border-opacity-10" />
                          <li className="">
                            <Link
                              href="/emergency-dental-services"
                              className={cn(
                                "block px-2 py-[10px] font-fire text-[18px]",
                                currentPathname === "/emergency-dental-services"
                                  ? "text-[#20B4CE]"
                                  : ""
                              )}
                            >
                              Emergency Dental
                            </Link>
                          </li>
                          <hr className="bg-[#20B4CE] border-[#20B4CE] border-opacity-10" />
                          <li className="">
                            <Link
                              href="/cosmetic-dentistry"
                              className={cn(
                                "block px-2 py-[10px] font-fire text-[18px]",
                                currentPathname === "/cosmetic-dentistry"
                                  ? "text-[#20B4CE]"
                                  : ""
                              )}
                            >
                              Cosmetic Dentistry
                            </Link>
                          </li>
                        </ul> */}
                      </li>

                      <li className="flex">
                        <Link
                          href="/"
                          className="block  text-[18px] font-poppins font-normal leading-[25.5px] text-primary"
                        >
                          About
                        </Link>
                        <Image src={line} alt="line" />
                      </li>
                      <li className="flex">
                        <Link
                          href="/"
                          className="block  text-[18px] font-poppins font-normal leading-[25.5px] text-primary"
                        >
                          Packages
                        </Link>
                        <Image src={line} alt="line" />
                      </li>
                      <li className="flex">
                        <Link
                          href="/"
                          className="block  text-[18px] font-poppins font-normal leading-[25.5px] text-primary"
                        >
                          Services
                        </Link>
                        <Image src={line} alt="line" />
                      </li>
                      <li>
                        <Link
                          href="/contact-us"
                          className="block  text-[18px] font-poppins font-normal leading-[25.5px] text-primary  "
                        >
                          News
                        </Link>
                      </li>
                    </ul>
                    <div className=" xl:hidden">
                      <div className="relative group inline-block">
                        <Button className="w-[207px] h-[58px]">
                          Let&apos;s work together
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* tab and mob  menu*/}
              <div className="hidden xl:block pr-[5%] mob:pr-0 ">
                <div
                  className="relative cursor-pointer flex pr-2 mob:pr-0 pt-[5px]"
                  onClick={onOpen}
                >
                  <button
                    // onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  bg-transparent text-white rounded-lg  "
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative z-40">
                  <Drawer isOpen={isOpen} onClose={onClose}>
                    <div className="flex flex-col justify-center items-center h-full w-full ">
                      <Image src={logo} alt="logo" className="w-[150px]" />
                      <ul className="font-normal  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/"
                          className="block  text-[18px] font-poppins font-medium leading-[25.5px] text-primary  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Home
                          </li>
                        </Link>
                        <hr className="h-px  bg-[#C0C0C0] border-0"></hr>

                        <li
                          className={cn(
                            "flex justify-center font-poppins py-[15px] list-items gap-2 items-center"
                            // ServicesToggle ? " pt-[15px] pb-[4px]" : ""
                          )}
                          //   onClick={handleServicesToggle}
                        >
                          <Link
                            href="/"
                            className="text-[18px] pl-5 font-medium text-white text-center"
                            // onClick={(e) => e.stopPropagation()}
                          >
                            Projects
                          </Link>
                          {/* <FaChevronDown
                            className={`text-white transform transition-transform duration-300 text-[18px] ${
                              ServicesToggle ? "rotate-180" : "rotate-0"
                            }`}
                          /> */}
                        </li>
                        {/* <div
                          className={cn(
                            "pt-1 pb-4 flex items-center flex-col h-full justify-center",
                            ServicesToggle ? "flex" : "hidden"
                          )}
                        >
                          <div className="w-full h-[1px] bg-[#C0C0C0] mb-3"></div>
                          <a
                            href="/genral-dentistry"
                            className="text-white text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Family Dentistry
                          </a>
                          <a
                            href="/invisalign"
                            className="text-white mt-2 text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Invisalign
                          </a>

                          <a
                            href="/pediatrics"
                            className="text-white mt-2 text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Pediatrics
                          </a>

                          <a
                            href="/dental-implants"
                            className="text-white mt-2 text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Dental Implants
                          </a>

                          <a
                            href="/emergency-dental-services"
                            className="text-white mt-2 text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Emergency Dental
                          </a>

                          <a
                            href="/cosmetic-dentistry"
                            className="text-white mt-2 text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Cosmetic Dentistry
                          </a>
                        </div> */}

                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/about"
                          className="block  text-[18px] font-poppins font-medium leading-[25.5px] text-primary  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            About
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="/our-doctors"
                          className="block  text-[18px] font-poppins font-medium leading-[25.5px] text-primary  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Packages
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                        <a
                          href="/contact-us"
                          className="block  text-[18px] font-poppins font-medium leading-[25.5px] text-primary  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Services
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                        <li
                          className={cn(
                            "flex justify-center font-poppins py-[15px] list-items gap-2 items-center"
                            // ServicesToggle ? " pt-[15px] pb-[4px]" : ""
                          )}
                          //   onClick={handleBooknowToggle}
                        >
                          <Link
                            href="/"
                            className="text-[18px] pl-5 font-medium text-white text-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Let&apos;s work together
                          </Link>
                          {/* <FaChevronDown
                            className={`text-white transform transition-transform duration-300 text-[18px] ${
                              ServicesToggle ? "rotate-180" : "rotate-0"
                            }`}
                          /> */}
                        </li>
                        {/* <div
                          className={cn(
                            "pt-1 pb-4 flex items-center flex-col h-full justify-center",
                            BooknowToggle ? "flex" : "hidden"
                          )}
                        >
                          <div className="w-full h-[1px] bg-[#C0C0C0] mb-3"></div>
                          <a
                            href="http://pcols.com/!NDI2"
                            className="text-white text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Waldorf
                          </a>
                          <a
                            href="http://pcols.com/!Nzgx"
                            className="text-white mt-2 text-[14px] font-medium font-poppins"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Takoma Park
                          </a>
                        </div> */}
                      </ul>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
