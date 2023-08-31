import { SubTitleLeftIcon } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiAppleFill, RiGooglePlayFill } from "react-icons/ri";

const DownLoadApp = () => {
  return (
    <div className={`mb-16 lg:mb-20`}>
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 bg-taxiar-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-16 pt-16">
            <div className="">
              <SubTitleLeftIcon title={"Download Taxi APP Now"} />
              <h2
                className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
              >
                Get A Free Taxiar App From Online Store
              </h2>
              <p>
                Competently re-engineer cross-media meta-services whereas best
                of breed processes matrix just in time content...
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Link
                  href={""}
                  className="rounded-[26px] flex items-center justify-center  capitalize text-[15px]
              leading-[22px] font-[600] font-Josefin py-3 px-6 text-taxiar-2 bg-white border-[1px] border-taxiar-1  hover:bg-taxiar-1 hover:text-taxiar-2 "
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <RiGooglePlayFill className="h-8 w-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[12px] leading-[14px] uppercase mb-0`}
                      >
                        Download from
                      </p>
                      <h5 className={`text-[18px] leading-[22px] font-[700]`}>
                        Google Play
                      </h5>
                    </div>
                  </div>
                </Link>
                <Link
                  href={""}
                  className="rounded-[26px] flex items-center justify-center  capitalize text-[15px]
              leading-[22px] font-[600] font-Josefin py-3 px-6 text-taxiar-2 bg-white border-[1px] border-taxiar-1  hover:bg-taxiar-1 hover:text-taxiar-2 "
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <RiAppleFill className="h-8 w-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[12px] leading-[14px] uppercase mb-0`}
                      >
                        Download from
                      </p>
                      <h5 className={`text-[18px] leading-[22px] font-[700]`}>
                        App Store
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                src="/assets/images/bg/phone_1.png"
                width={596}
                height={490}
                alt="Download App"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownLoadApp;
