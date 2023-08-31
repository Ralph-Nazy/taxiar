import React from "react";
import { BLOG_LIST } from "@/data/data";
import {
  Categories,
  PopularTags,
  CallToAction,
  Search,
  LatestPosts,
  BlogListCard,
  CommentsCard,
} from "@/components";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDiscussFill,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiPriceTag3Fill,
  RiTwitterFill,
  RiUser3Fill,
  RiWhatsappLine,
} from "react-icons/ri";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="shadow-md p-8 mb-8">
            <div className="relative">
              <Image
                src="/assets/images/blog/blog-s-1-1.jpg"
                width={713}
                height={400}
                alt="Blog Details"
              />
              <div className="absolute bg-white rounded-tr-[50px] text-taxiar-13 bottom-0 left-0 text-center py-2 px-3">
                <h6 className="text-[24px] font-Josefin text-taxiar-1 leading-[30px] font-[700]">
                  {" "}
                  {moment("2023-08-10T19:20:02.363691+00:00").format("DD")}
                </h6>
                <span className="text-[14px] leading-[18px]">
                  {" "}
                  {moment("2023-08-10T19:20:02.363691+00:00").format(
                    "MMMM YYYY"
                  )}
                </span>
              </div>
            </div>
            <p className="flex items-center text-taxiar-13 text-[14px] font-[400] mt-4 mb-0">
              <RiUser3Fill className="inline-block mr-2 text-taxiar-1" />
              <span className="mr-4">By Alex Michel</span>
              <RiPriceTag3Fill className="inline-block mr-2 text-taxiar-1" />
              <span className="mr-4">Online Taxi Booking</span>
              <RiDiscussFill className="mx-2 text-taxiar-1 inline-block" />
              <span className="capitalize">comments (3)</span>
            </p>
            <h2
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px] hover:text-taxiar-1"
            >
              Tensive quality vectors life through strategies
            </h2>
            <p>
              Uniquely iterate e-business catalysts for change without cross
              functional supply chains. Completely harness extensible
              infrastructures via future-proof infomediaries. Rapaciously grow
              competitive collaboration and idea-sharing without intuitive.
            </p>
            <p>
              Energistically deploy orthogonal materials before premium
              intellectual capital. Uniquely mesh value-added systems rather
              than premier scenarios. Dynamically exploit transparent.
            </p>
            <h3
              className="text-taxiar-2 font-[700] mt-3 mb-3 text-[22px] 
                    leading-[32px] lg:text-[30px] lg:leading-[40px]"
            >
              Small Car the Horn It Deserves
            </h3>
            <p>
              Dynamically benchmark cross-platform supply chains through state
              of the art benefits. Proactively empower integrated products and
              value added core competencies. Distinctively reinvent optimal
              commerce and sticky leadership. Rapidiously reinvent functional
              information whereas high quality technologies provide access to
              diverse services whereas collaborative
            </p>
            <Image
              src="/assets/images/blog/blog-s-1-5.jpg"
              width={713}
              height={400}
              alt="Blog Details"
              className="mb-5"
            />
            <p>
              Distinctively predominate collaborative leadership skills with
              inexpensive functionalities. Holistically grow unique value rather
              than emerging solutions. Uniquely maintain best niche markets and
              user friendly models.
            </p>
            <div className="p-6 bg-taxiar-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Link
                    href={""}
                    className="hover:bg-taxiar-1 inline-flex items-center
                      bg-taxiar-1 hover:text-taxiar-2 uppercase py-2 px-3 m-1 text-[14px] leading-[18px] font-[600] text-taxiar-2"
                  >
                    Technology
                  </Link>
                  <Link
                    href={""}
                    className="hover:bg-taxiar-1 inline-flex items-center
                      bg-white hover:text-taxiar-2 uppercase py-2 px-3 m-1 text-[14px] leading-[18px] font-[600] text-taxiar-13"
                  >
                    Business
                  </Link>
                </div>
                <div className="flex items-center lg:mt-2 lg:justify-end">
                  <p className="text-taxiar-2 uppercase">Follow Us: </p>
                  <ul className="flex flex-wrap mt-[-12px]">
                    <li className="mr-3">
                      <Link
                        className="inline-flex items-center p-1 text-taxiar-2 hover:text-taxiar-1"
                        href="#"
                      >
                        <RiFacebookFill />
                      </Link>
                    </li>
                    <li className="mr-3">
                      <Link
                        className="inline-flex items-center p-1 text-taxiar-2 hover:text-taxiar-1"
                        href="#"
                      >
                        <RiTwitterFill />
                      </Link>
                    </li>
                    <li className="mr-3">
                      <Link
                        className="inline-flex items-center p-1 text-taxiar-2 hover:text-taxiar-1"
                        href="#"
                      >
                        <RiInstagramLine />
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="inline-flex items-center p-1 text-taxiar-2 hover:text-taxiar-1"
                        href="#"
                      >
                        <RiLinkedinFill />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            <div className="shadow-md p-8 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                <Link href={''} className="lg:mb-4 flex items-center justify-start  capitalize text-[18px]
              leading-[22px] font-[700] font-Josefin text-taxiar-2 hover:text-taxiar-1 ">
            <RiArrowLeftLine className="mr-3" />Previous Post </Link>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex-shrink-0">
              <Link href={''}><Image
                  src="/assets/images/blog/blog-nav-1.jpg"
                  alt={'How to Overcome Your Fear of Driving'}
                  height="80"
                  width="80"
                  className={`rounded-[10px]`}
                /></Link>
              </div>
              <div className="flex-1 min-w-0"> 
              <Link href={''}><h4 className={`text-[18px] leading-[24px] pt-1 text-taxiar-2 font-[500] hover:text-taxiar-1`}>
                    How to Overcome Your Fear of Driving
                </h4> </Link>
              </div>
            </div>
                </div>
                <div>
                <Link href={''} className="lg:mb-4 flex items-center justify-end  capitalize text-[18px]
              leading-[22px] font-[700] font-Josefin text-taxiar-2 hover:text-taxiar-1 ">
            Next Post <RiArrowRightLine className="ml-2" /></Link>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex-1 min-w-0 lg:text-right"> 
              <Link href={''}><h4 className={`text-[18px] leading-[24px] pt-1 text-taxiar-2 font-[500] hover:text-taxiar-1`}>
                    How to Overcome Your Fear of Driving
                </h4> </Link>
              </div>
              <div className="flex-shrink-0">
              <Link href={''}><Image
                  src="/assets/images/blog/blog-nav-1.jpg"
                  alt={'How to Overcome Your Fear of Driving'}
                  height="80"
                  width="80"
                  className={`rounded-[10px]`}
                /></Link>
              </div>
            </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-8 mb-8">
            <h2
              className="text-taxiar-2 font-[700] mb-8 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px] uppercase"
            >
              <RiDiscussFill className="mr-2 text-taxiar-1 inline-block" /> Comments (3)
            </h2>
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            </div>
          </div>
          <div className="lg:col-span-4">
            <Search />
            <Categories />
            <LatestPosts />
            <PopularTags />
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSection;
