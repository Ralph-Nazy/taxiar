"use client"

import { Loader } from '@/components';
import { BreadCrumb, TaxiSection } from '@/sections'
import React, { useEffect, useState } from 'react'

const Taxi = () => {
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
    <BreadCrumb title={'Our Taxi'} url={'taxi'} />
    <TaxiSection />
    </>
    )}
    </>
  )
}

export default Taxi