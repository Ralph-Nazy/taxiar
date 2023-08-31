"use client";
import { Loader } from "@/components";
import { BranchInfoSection, BreadCrumb, MapSection } from "@/sections";
import React, { useEffect, useState } from "react";

const Contact = () => {
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
          <BreadCrumb title={"Contact us"} url={"contact"} />
          <BranchInfoSection />
          <MapSection />
        </>
      )}
    </>
  );
};

export default Contact;
