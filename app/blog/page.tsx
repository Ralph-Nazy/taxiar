"use client";
import { Loader } from "@/components";
import { BreadCrumb, BlogSection } from "@/sections";
import React, { useEffect, useState } from "react";

const Blog = () => {
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
          <BreadCrumb title={"Blog"} url={"blog"} />
          <BlogSection />
        </>
      )}
    </>
  );
};

export default Blog;
