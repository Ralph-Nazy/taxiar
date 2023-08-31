"use client";
import { Loader } from "@/components";
import { BreadCrumb, ServicesSection } from "@/sections";
import React, { useEffect, useState } from "react";

const Services = () => {
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
          <BreadCrumb title={"Our Services"} url={"services"} />
          <ServicesSection />
        </>
      )}
    </>
  );
};

export default Services;
