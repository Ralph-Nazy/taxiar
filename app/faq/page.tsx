"use client";
import { Loader } from "@/components";
import { BreadCrumb, FAQSection } from "@/sections";
import React, { useEffect, useState } from "react";

const FAQ = () => {
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
          <BreadCrumb title={"Frequently Asked Question"} url={"faq"} />
          <FAQSection />
        </>
      )}
    </>
  );
};

export default FAQ;
