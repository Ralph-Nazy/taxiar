import Link from "next/link";
import React from "react";
import {
  RiWhatsappLine,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiArrowRightLine,
} from "react-icons/ri";
import { BOTTOM_FOOTER_LINKS, QUICK_LINKS, LATESTPOSTS } from "../../data/data";
import { LatestPostFooter } from "..";
const Footer: React.FC<{}> = () => {
  const date = new Date();

  return (
    <>
      <div
        className="pt-16 lg:pt-10 pb-16 lg:pb-10"
        style={{
          background: `#1B1B1B url(/assets/images/bg/bg-footer-1.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div>
              <h4 className="text-white capitalize text-[24px] leading-[32px] pb-[20px] font-[700]">
                About Company
              </h4>
              <p>
                Centric applications productize front end portals visualize
                front end is results and value added
              </p>
              <h5 className="mt-5 capitalize text-white text-[17px] font-[500] leading-[22px]">
                We are available
              </h5>
              <p>Mon-Sat: 09.00 am to 6.30 pm</p>
              <ul className="flex flex-wrap mt-8">
                <li className="mr-3">
                  <Link
                    className="inline-flex items-center p-3 text-white
                         bg-taxiar-11 rounded-full
                         hover:bg-taxiar-1 hover:text-taxiar-2"
                    href="#"
                  >
                    <RiFacebookFill />
                  </Link>
                </li>
                <li className="mr-3">
                  <Link
                    className="inline-flex items-center p-3 text-white
                    bg-taxiar-11 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                    href="#"
                  >
                    <RiTwitterFill />
                  </Link>
                </li>
                <li className="mr-3">
                  <Link
                    className="inline-flex items-center p-3 text-white
                    bg-taxiar-11 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                    href="#"
                  >
                    <RiWhatsappLine />
                  </Link>
                </li>
                <li className="mr-3">
                  <Link
                    className="inline-flex items-center p-3 text-white
                    bg-taxiar-11 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                    href="#"
                  >
                    <RiInstagramLine />
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="inline-flex items-center p-3 text-white
                    bg-taxiar-11 rounded-full
                    hover:bg-taxiar-1 hover:text-taxiar-2"
                    href="#"
                  >
                    <RiLinkedinFill />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white capitalize text-[24px] leading-[32px] pb-[20px] font-[700]">
                Quick Links
              </h4>
              <ul>
                {QUICK_LINKS.map((item, index) => (
                  <li key={index} className="mb-3">
                    <Link
                      className="inline-flex items-center hover:text-taxiar-1 text-taxiar-3"
                      href={item.url}
                    >
                      <RiArrowRightLine className="mr-2" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white capitalize text-[24px] leading-[32px] pb-[20px] font-[700]">
                Latest Posts
              </h4>
              <ul className="max-w-md divide-y divide-taxiar-9 divide-opacity-10">
                {LATESTPOSTS.map((post, index) => (
                  <LatestPostFooter
                    key={index}
                    title={post.title}
                    date={post.date}
                    img={post.img}
                    url={post.url}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white capitalize text-[24px] leading-[32px] pb-[20px] font-[700]">
                Newsletter
              </h4>
              <p>
                Sign Up to get updates & news about us . Get Latest Deals from
                Walkers Inbox to our mail address.
              </p>
              <input
                placeholder="Enter your email"
                className="py-3 px-6 text-[12px] mb-2 mt-6 rounded-[26px] font-[300] outline-none text-taxiar-3 w-[100%] bg-taxiar-11  focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-11"
              />
              <button
                className="outline-none inline-flex mt-2 items-center justify-center capitalize text-[15px] w-[100%]
                 leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-white hover:text-taxiar-2  rounded-[26px]"
                type="submit"
              >
                Subscribe Now <RiArrowRightLine className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-taxiar-12 text-taxiar-3 text-[12px] pt-5 pb-5">
        <div className="container mx-auto px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <p>
                &#169; {date.getFullYear()}{" "}
                <span className="text-taxiar-1">Taxiar</span>. All Rights
                Reserved
              </p>
            </div>
            <div>
              <ul className="flex flex-wrap lg:items-end lg:justify-end">
                {BOTTOM_FOOTER_LINKS.map((link, index) => (
                  <li className="mr-6 last:mr-0" key={index}>
                    <Link
                      className="hover:text-taxiar-1 text-taxiar-3"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
