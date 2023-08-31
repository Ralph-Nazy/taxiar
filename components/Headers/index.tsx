"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  title: string;
  url?: string;
  sublinks?: MenuItem[];
}

interface DropdownProps {
  menuItems: MenuItem[];
}

export const Navbar: React.FC<DropdownProps> = ({ menuItems }) => {
  const [active, setActive] = useState(false);
  const [headerBgColor, setheaderBgColor] = useState("#F7F4ED");
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  const handleOutsideClick = () => {
    setOpenMenuIndex(null);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setheaderBgColor("#000")
      : setheaderBgColor("#F7F4ED")
  }
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <> 
      <nav className="flex items-center justify-center flex-wrap" style={{
          backgroundColor: headerBgColor,
        }}>
            <div className='container mx-auto px-10 lg:px-24'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 lg:col-span-3'>
                    <Link href="/">
          <span className="inline-flex items-center pt-4 lg:ml-8 mr-4">
            <Image 
              src="/assets/images/logo/logo3.svg" 
              width="144"
              height="51"
              alt="IamRalph Online"
            /> 
          </span>
        </Link>
                    </div>
                    <div className='col-span-6 lg:col-span-9'>
                    <button
          className=" inline-flex lg:hidden bg-taxiar-1 p-2 text-white ml-auto hover:text-taxiar-2 mt-3 float-right outline-none"
          onClick={handleClick}
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
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="absolute lg:relative left-0 z-[999999] border-t-[2px] lg:border-t-0 border-taxiar-1 top-[4rem] lg:top-0 lg:right-6 lg:inline-flex lg:flex-row lg:bg-transparent  bg-[#F7F4ED] lg:ml-auto lg:w-auto w-full lg:items-center items-start mr-8  flex flex-col lg:h-auto">
                       {menuItems.map((item, index) => (
        <div key={index} className="relative px-5 lg:py-5 py-3" ref={dropdownRef}>
          {item.sublinks ? (
            <>
               <span className="inline-flex w-auto text-taxiar-2 text-[14px] uppercase font-[500] font-Josefin
              items-center justify-center hover:text-taxiar-1 cursor-pointer"
                onClick={(event) => {
                  event.stopPropagation();
                  handleMenuClick(index);
                }}
              >
                {item.title}
                {openMenuIndex === index ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </span>
              {item.sublinks && openMenuIndex === index && (
                <div className="origin-top relative lg:absolute border-b-[4px] border-taxiar-1 font-Josefin z-40 left-0 lg:left-5 mt-5 w-56 bg-white">
                  <div className="py-2">
                    {item.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.url || '#'}
                        className="block px-4 py-1 text-[14px] text-taxiar-2 hover:text-taxiar-1"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.url || '#'}
              
            >
                <span className="inline-flex w-auto text-taxiar-2 text-[14px] uppercase font-Josefin
              font-[500] items-center justify-center hover:text-taxiar-1 cursor-pointer">
              {item.title}
              </span>
            </Link>
          )}
        </div>
      ))}

 
            {/* <Link href="/docs/Ralph-Wesley-Nazombe-CV-2023.pdf" className="px-5 lg:py-0 py-3" target="_blank">
              <span className="btn-custom transition duration-500 ease hover:text-white inline-block text-lg border border-orange-400 text-orange-400 px-8 py-3 cursor-pointer">
                Download CV
              </span>
            </Link> */}
          </div>
        </div>
                    </div>
                </div>
            </div>
        
        
      </nav> 
    </>
  );
};
export default Navbar;