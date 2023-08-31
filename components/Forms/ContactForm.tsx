"use client";
import { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { RiArrowRightLine } from "react-icons/ri";

type ContactFormData = {
  name: string;
  phone: string;
  subject: string;
  email: string;
  message: string;
};

const ContactForm: NextPage = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setError("");

    try {
      await axios.post("/api/email", data);
      setIsSent(true);
      reset();
    } catch (error) {
      setError("Error sending email. Please try again later.");
      console.error("Error sending email:", error);
    }

    setIsSending(false);
  };
  return (
    <div className="bg-taxiar-9 p-8 ">
      <h3 className="font-[700] font-Josefin text-taxiar-2 text-[24px] leading-[32px] lg:text-[36px] lg:leading-[41px] capitalize mb-4">
      Ask A Question
      </h3>
      <p>Car driver instructor must also have good communication skills patience confidence and teaching skills.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="py-2 px-4 text-[12px] mb-1 font-[300] outline-none text-taxiar-3 w-[100%] bg-white border-[1px] border-taxiar-14  focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-1"
            />
            {errors.name && (
              <span className="my-2 text-[red] font-Josefin font-[300] leading-[20px]">
                This field is required
              </span>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="py-2 px-4 text-[12px] mb-1 font-[300] outline-none text-taxiar-3 w-[100%] bg-white border-[1px] border-taxiar-14  focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-1"
            />
            {errors.email && (
              <span className="my-2 text-left text-[#dc2626] font-Josefin font-[300] leading-[20px]">
                This field is required
              </span>
            )}
          </div> 
        <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Phone Number"
              className="py-2 px-4 text-[12px] mb-1 font-[300] outline-none text-taxiar-3 w-[100%] bg-white border-[1px] border-taxiar-14  focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-1"
            />
            {errors.email && (
              <span className="my-2 text-left text-[#dc2626] font-Josefin font-[300] leading-[20px]">
                This field is required
              </span>
            )}
          </div>  
          <div>
            <input
              type="text"
              {...register("subject", { required: true })}
              placeholder="Your Subject"
              className="py-2 px-4 text-[12px] mb-1 font-[300] outline-none text-taxiar-3 w-[100%] bg-white border-[1px] border-taxiar-14  focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-1"
            />
            {errors.name && (
              <span className="my-2 text-[#dc2626] font-Josefin font-[300] leading-[20px]">
                This field is required
              </span>
            )}
          </div>  
        </div>
        <div className="grid grid-cols-1 mt-2 gap-2">          
        <div>
              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                rows={3}
                className="p-2 text-[12px] mb-2 font-[300] outline-none text-taxiar-3 w-[100%] bg-white border-[1px] border-taxiar-14  focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-1"
              />
              {errors.message && (
                <span className="my-2 text-[#dc2626] font-Josefin font-[300] leading-[20px]">
                  This field is required
                </span>
              )}
            </div> 
          {error && (
            <p className="my-2 text-[#dc2626]  font-[300] leading-[20px]">
              {error}
            </p>
          )}
          {isSent ? (
            <p className="my-2 text-white font-Josefin font-[300] leading-[20px]">
              Thank you for your message! We will get back to you soon.
            </p>
          ) : (
            <></>
          )}
          <div className="text-center">
            <button
              className="outline-none inline-flex mt-2 items-center justify-center capitalize text-[15px] w-[100%]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-taxiar-2 hover:text-taxiar-1"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}{" "}
              <RiArrowRightLine className="ml-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
