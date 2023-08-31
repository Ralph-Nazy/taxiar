"use client";
import { Loader } from "@/components";
import { BreadCrumb, ServicesDetailSection } from "@/sections";
import React, { useEffect, useState } from "react";

const ServicesDetails = () => {
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
          <BreadCrumb
            title={"Service Details"}
            url={"services/service-details"}
          />
          <ServicesDetailSection />
        </>
      )}
    </>
  );
};

export default ServicesDetails;
