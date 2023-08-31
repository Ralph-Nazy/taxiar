import { BookingForm, SubTitleLeft } from "@/components";
import React from "react";
import { RiPhoneFill, RiStarSFill, RiStarHalfSLine } from "react-icons/ri";

const BookingSection: React.FC<{}> = () => {
  return (
    <>
      <div className="py-16 lg:py-20 bg-taxiar-2 text-taxiar-3 relative">
        <div className="container mx-auto px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <SubTitleLeft title={"Taxi Booking Form"} />
              <h2
                className="text-white font-[700] mt-3 mb-3 text-[26px] 
                            leading-[32px] lg:text-[42px] lg:leading-[50px] capitalize"
              >
                Book Your Taxi Online
              </h2>
              <p>
                Taxis can be hailed from any location and at any time. Maintain
                optimal business competitive products grow strategic and
                technically sound human capital distributed
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <div className="flex-shrink-0">
                  <div
                    className="inline-flex items-center p-5 text-taxiar-2
                         bg-taxiar-1 rounded-full"
                  >
                    <RiPhoneFill />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p>Call for book an order:</p>
                  <p className="text-taxiar-1 text-[20px] font-[600] leading-[28px] mt-1">
                    +256 3215 3215
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-white text-taxiar-3 relative">
        <div className="container mx-auto px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-taxiar-9 rounded-[8px] p-8">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 bg-white rounded-[5px] border-[1px] border-taxiar-14 p-4">
                        <p className="text-[20px] leading-[30px] font-Josefin items-center
                         justify-center text-center 
                          text-taxiar-2 font-[600] border-b-[1px] border-b-taxiar-14">4.9/5</p>
                          <div className="flex items-center justify-center mt-1">
                          <RiStarSFill className="text-taxiar-1 mr-1" />
                          <RiStarSFill className="text-taxiar-1 mr-1" />
                          <RiStarSFill className="text-taxiar-1 mr-1" />
                          <RiStarSFill className="text-taxiar-1 mr-1" />
                          <RiStarHalfSLine className="text-taxiar-1" />
                          </div>
                    </div>
                    <div className="col-span-7">
                        <p className="text-[20px] leading-[30px] text-taxiar-2 font-[600] font-Josefin">Trust Score Rated</p>
                        <p className="text-taxiar-13">Rated by over 20000+ customers</p>
                    </div>
                </div> 
            </div>
            <div className="">
                <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookingSection;
