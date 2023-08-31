import { BookingFormPage } from "@/components";
import React from "react";

const BookingFormSection = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 gap-4  shadow-md p-10">
        <h2
              className="text-taxiar-2 text-center font-[700] text-[26px] 
                    leading-[32px] lg:text-[30px] lg:leading-[46px] uppercase"
            >
              Make Your Booking Today
            </h2>
            <p className="text-center pb-6 mb-6 border-b-[1px] border-taxiar-9">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has 
                distribution of letters to using content here making it look like readable.</p>
                <BookingFormPage />
        </div>
      </div>
    </div>
  );
};

export default BookingFormSection;
