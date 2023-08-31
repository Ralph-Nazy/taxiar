"use client";
import { HomeOneCarousel, Loader } from "@/components";
import {
  AboutSection,
  HomeOneServiceSection,
  TeamMemberSection,
  OurTaxiHomeOneSection,
  DownLoadApp,
  LatestPostSection,
  TestimonialSection,
  OurPartners,
  VideoSection,
  HomeBookingFormSection,
} from "@/sections";
import { useEffect, useState } from "react";

export default function Home() {
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
          <HomeOneCarousel />
          <HomeBookingFormSection />
          <AboutSection />
          <HomeOneServiceSection bg={"bg-taxiar-9"} />
          <TeamMemberSection bg={"bg-white"} />
          <OurTaxiHomeOneSection />
          <DownLoadApp />
          <VideoSection />
          <OurPartners />
          <TestimonialSection />
          <LatestPostSection />
        </>
      )}
    </>
  );
}
