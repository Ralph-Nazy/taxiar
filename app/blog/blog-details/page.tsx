"use client";
import { Loader } from "@/components";
import { BreadCrumb, BlogDetailsSection } from "@/sections";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
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
          <BreadCrumb title={"Blog Details"} url={"/blog/blog-details"} />
          <BlogDetailsSection />
        </>
      )}
    </>
  );
};

export default BlogDetails;
