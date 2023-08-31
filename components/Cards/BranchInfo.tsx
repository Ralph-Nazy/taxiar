"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMapPin2Line, RiPhoneLine, RiMailLine } from "react-icons/ri";

interface Branch {
  address: string;
  phone: string;
  email: string;
}

interface Branches {
  [key: string]: Branch[];
}

const BRANCHES: Branches = {
  "usa Branch": [
    {
      address: "25 Street, City Road, USA",
      phone: "+(468)-2547-62443",
      email: "info@taxiar.com",
    },
    // ... Canada and RSA branches
  ],
  "canada Branch": [
    {
      address: "25 Street, City Road, Canada",
      phone: "+(468)-2547-62443",
      email: "info@taxiar.ca",
    },
    // ... Canada and RSA branches
  ],
  "South Africa Branch": [
    {
      address: "25 Sandton Drive, Johannesburg, RSA",
      phone: "+(468)-2547-62443",
      email: "info@taxiar.za",
    },
    // ... Canada and RSA branches
  ],
  // ... other countries
};

const BranchInfo: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState("usa Branch"); // Default branch is USA

  const handleBranchChange = (branch: string) => {
    setSelectedBranch(branch);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center mb-8">
        {Object.keys(BRANCHES).map((branch) => (
          <button
            key={branch}
            className={`px-4 py-2 mx-2 font-Heebo text-[14px] ${
              selectedBranch === branch
                ? "bg-taxiar-2 text-taxiar-1"
                : "bg-taxiar-1 text-taxiar-2"
            }`}
            onClick={() => handleBranchChange(branch)}
          >
            {branch.toUpperCase()}
          </button>
        ))}
      </div>
      {BRANCHES[selectedBranch].map((branch, index) => (
        <div key={index} className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex group flex-col items-center text-center justify-center p-8 bg-taxiar-9 text-taxiar-2 hover:bg-taxiar-1">
              <RiMapPin2Line className="h-12 w-12 text-taxiar-1 group-hover:text-taxiar-2" />
              <p className="mb-2 mt-3 font-Josefin font-[500]">Address</p>
              <Link href={`tel:${branch.phone}`}>
                <h4 className="text-[20px] leading-[30px] lg:text-[24px] lg:leading-[34px] font-[600]">
                  {branch.address}
                </h4>
              </Link>
            </div>
            <div className="flex flex-col group items-center justify-center p-8 bg-taxiar-9 text-taxiar-2 hover:bg-taxiar-1">
              <RiPhoneLine className="h-12 w-12 text-taxiar-1 group-hover:text-taxiar-2" />
              <p className="mb-2 mt-3 font-Josefin font-[500]">Phone</p>
              <Link href={`tel:${branch.phone}`}>
                <h4 className="text-[20px] leading-[30px] lg:text-[24px] lg:leading-[34px] font-[600]">
                  {branch.phone}
                </h4>
              </Link>
            </div>
            <div className="flex flex-col group items-center justify-center p-8 bg-taxiar-9 text-taxiar-2 hover:bg-taxiar-1">
              <RiMailLine className="h-12 w-12 text-taxiar-1 group-hover:text-taxiar-2" />
              <p className="mb-2 mt-3 font-Josefin font-[500]">Email:</p>
              <Link href={`mailto:${branch.email}`}>
                <h4 className="text-[20px] leading-[30px] lg:text-[24px] lg:leading-[34px] font-[600]">
                  {" "}
                  {branch.email}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BranchInfo;
