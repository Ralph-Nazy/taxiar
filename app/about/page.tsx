"use client"
import { Loader } from "@/components";
import {
  BreadCrumb,
  AboutSection,
  OurServicesCommon,
  BookingSection,
  OurProcessSection,
  TeamMemberSection,
  TimeLineSection,
} from "@/sections";
import React, { useEffect, useState } from "react";

const About = () => {
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
      <BreadCrumb title={"About us"} url={"about"} />
      <AboutSection />
      <TimeLineSection />
      <OurServicesCommon />
      <BookingSection />
      <OurProcessSection />
      <TeamMemberSection bg={"bg-taxiar-9"} />
    </>
    )}
    </>
  );
};
export default About;
