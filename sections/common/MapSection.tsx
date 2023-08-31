import React from "react";
import { ContactForm, Map } from "@/components"
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.475434287222!2d27.91912951502692!3d-26.050714283506416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959dfe28632593%3A0xb176f2f1f264fe20!2s31%20Pinehurst%2C%20Jackal%20Creek%20Golf%20Estate%2C%20Roodepoort%2C%202169!5e0!3m2!1sen!2sza!4v1687897910722!5m2!1sen!2szaps://goo.gl/maps/uWrB3v34XJhb9AUS7'; 


const MapSection = () => {
  return (
    <div className="mb-16 lg:mb-20">
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
            <div className="order-2 lg:order-1 h-full"><Map src={mapUrl} width="100%" height="100%"  /></div>
            <div className="order-1 lg:order-2"><ContactForm /></div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
