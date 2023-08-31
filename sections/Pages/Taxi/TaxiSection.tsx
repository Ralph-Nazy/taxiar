"use client";
import { SubTitleDefault, TaxiCardOne } from "@/components";
import { TAXI_LIST } from "@/data/data";
import React, { useState } from "react";

const TaxiSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from photos
  const categories = Array.from(
    new Set(TAXI_LIST.map((taxi) => taxi.category))
  );

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredTaxis = selectedCategory
    ? TAXI_LIST.filter((taxi) => taxi.category === selectedCategory)
    : TAXI_LIST;
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1">
          <SubTitleDefault title={"Our Taxi"} />
        </div>
        <div className="grid grid-cols-1 text-center">
          <h2
            className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
          >
            Choose Our Taxi Collection
          </h2>
        </div>
        <div className="flex justify-center mb-10">
          <button
            className={`px-4 py-2 font-Heebo text-[14px] ${
              selectedCategory === null
                ? "bg-taxiar-1 text-taxiar-2"
                : "bg-taxiar-2 text-taxiar-1"
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            View All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 font-Heebo text-[14px] ${
                selectedCategory === category
                ? "bg-taxiar-1 text-taxiar-2"
                : "bg-taxiar-2 text-taxiar-1"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
          {filteredTaxis.map((taxi, index) => (
            <TaxiCardOne
              key={index}
              make={taxi.make}
              costPerKm={taxi.costPerKm}
              passenger={taxi.passenger}
              luggage={taxi.luggage}
              baseRate={taxi.baseRate}
              aircon={taxi.aircon}
              url={taxi.url}
              image={taxi.image}
              category={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxiSection;
