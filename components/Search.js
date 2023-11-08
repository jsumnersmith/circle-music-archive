'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Redirect } from "next";

export default function Search({initialSearch = ''}) {
  const [search, setSearch] = useState(initialSearch);
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      Redirect(`/search?q=${search}`);
    }
  }
  return (
    <div className="flex gap-3 my-6 items-center w-full">
      <input 
        type="text"
        placeholder="Search by song or artist name"
        value={search}
        onChange={handleChange}
        onKeyPress={handleEnter}
        className="px-3 py-2 border border-gray-300 bg-gray-100 flex-grow rounded-sm" 
      /> 
      <Link href={`/search?q=${search}`} className="bg-gray-800 hover:bg-gray-900 px-4 py-2 text-md rounded-sm text-gray-100">Search</Link>
    </div>
    
  )
};