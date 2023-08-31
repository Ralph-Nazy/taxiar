import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const CallToAction = () => {
  return (
    <div className='flex flex-col px-8 bg-taxiar-2 pb-8 pt-1 text-center'>
        <div className='mx-auto bg-white p-8 rounded-b-[30px] border-b-[5px] border-l-[5px] border-r-[5px] border-taxiar-1'>
            <h5 className='text-center text-taxiar-2 text-[20px] leading-[30px] font-[700]'>Need Help? We Are Here To Help You</h5>
        </div>
        <Image 
            src="/assets/images/logo/logo3.svg"
            width={161}
            height={30}
            alt='Taxiar'
            className='mx-auto my-8'
        />
        <h6 className='text-white text-[20px] leading-[30px] font-[700] uppercase'>You Get Taxi Booking</h6>
        <Link href="tel:(+468) 254 762 443" className='text-[18px] leading-[28px] text-taxiar-1 font-[700] hover:text-white'>(+468) 254 762 443</Link>
        <Link href="/contact" className="outline-none inline-flex mt-8 items-center justify-center capitalize text-[15px] w-[100%]
              leading-[22px] font-[600] font-Josefin py-4 px-6 text-taxiar-2 bg-taxiar-1 hover:bg-white hover:text-taxiar-2"
              type="submit" >
              Contact Us Now <RiArrowRightLine className="ml-4" /></Link>
    </div>
  )
}

export default CallToAction