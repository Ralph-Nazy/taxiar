"use client";
import { Loader } from "@/components";
import { BreadCrumb, TaxiDetailSection } from "@/sections";
import React, { useEffect, useState } from "react";

const TaxiDetails = () => {
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
          <BreadCrumb title={"Taxi Details"} url={"taxi/taxi-details"} />
          <TaxiDetailSection />
        </>
      )}
    </>
  );
};

export default TaxiDetails;
