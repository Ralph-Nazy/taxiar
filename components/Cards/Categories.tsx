import { CATEGORIES } from "@/data/data";
import Link from "next/link";
import React from "react";
import { RiFolder5Fill } from "react-icons/ri";

const Categories: React.FC<{}> = () => {
  return (
    <div className="bg-taxiar-9 p-8 mb-6">
      <h3 className="font-[700] font-Josefin text-taxiar-2 text-[20px] leading-[32px]  uppercase mb-4">
        Categories
      </h3>
      <ul className="max-w-md divide-y divide-[#E0E0E0]">
        {CATEGORIES.map((category, index) => (
        
        <li className="py-4" key={index}>
            <Link  href={category.url} className="hover:text-taxiar-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <RiFolder5Fill className="mt-1" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="mb-0">{category.title}</p>
            </div>
            <div className="inline-flex items-center">({category.count})</div>
          </div>
          </Link>
        </li>  

        ))}
      </ul>
    </div>
  );
};

export default Categories;
