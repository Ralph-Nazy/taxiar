import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Search = () => {
  return (
    <div className="bg-taxiar-9 p-8 mb-6">
        <div className="grid grid-cols-12">
        <input
              type="text" 
              placeholder="Enter Keyword..."
              className="py-3 px-6 text-[12px] col-span-9 font-[300] outline-none text-taxiar-3 w-[100%] bg-white border-[1px] border-white focus:border-[1px] focus:ring-0 focus:ring-taxiar-1  focus:border-taxiar-1"
            />
        <button
              className="outline-none inline-flex col-span-3 items-center justify-center
               text-taxiar-2 bg-taxiar-1 hover:bg-taxiar-2 hover:text-taxiar-1"
              type="submit" 
            > 
              <RiSearchLine className="" />
            </button>
        </div>
    </div>
  )
}

export default Search