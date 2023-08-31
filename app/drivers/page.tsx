"use client";
import { Loader } from "@/components";
import { BreadCrumb, DriversList } from "@/sections";
import React, { useEffect, useState } from "react";

const Drivers = () => {
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
          <BreadCrumb title={"Our Drivers"} url={"drivers"} />
          <DriversList />
        </>
      )}
    </>
  );
};

export default Drivers;
