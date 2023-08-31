import { SubTitleDefault, LatestNewsCarousel } from '@/components'
import React from 'react'

const LatestPostSection = () => {
  return (
    <div className={`py-16 lg:py-20 bg-white`}>
      <div className="container mx-auto px-10 lg:px-24">
        <div className="grid grid-cols-1">
          <SubTitleDefault title={"Our News Update"} />
        </div>
        <div className="grid grid-cols-1 text-center">
          <h2
            className="text-taxiar-2 font-[700] mt-3 mb-3 text-[26px] 
                    leading-[32px] lg:text-[42px] lg:leading-[50px]"
          >
            Latest News & Blog Post
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5">
          <LatestNewsCarousel />
        </div>
      </div>
    </div>
  )
}

export default LatestPostSection