import { FAQ, FQAContactForm } from "@/components";
import React from "react";
import { FAQ_ITEMS }  from "@/data/data"; 

const FAQSection: React.FC<{}> = () => {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
                <FAQ items={FAQ_ITEMS} />
            </div>
            <div className="lg:col-span-4">
                <FQAContactForm />
            </div>
        </div>
      </div>
    </div>
  );
};
export default FAQSection;
