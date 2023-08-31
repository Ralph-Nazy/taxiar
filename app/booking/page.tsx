"use client";
import { Loader } from "@/components";
import { BreadCrumb, BookingFormSection } from "@/sections";
import React, { useEffect, useState } from "react";

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // add a delay of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BreadCrumb title={"Book A Ride Plan"} url={"booking"} />
          <BookingFormSection />
        </>
      )}
    </>
  );
};

export default Booking;
