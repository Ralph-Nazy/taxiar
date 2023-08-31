"use client";
import { Loader } from "@/components";
import { BreadCrumb, DriverDetailSection } from "@/sections";
import React, { useEffect, useState } from "react";

const DriverDetails = () => {
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
          <BreadCrumb title={"Driver Details"} url={"drivers/driver-details"} />
          <DriverDetailSection />
        </>
      )}
    </>
  );
};

export default DriverDetails;
