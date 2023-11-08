'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Search as SearchIcon } from "react-feather"; 
import { useRouter } from 'next/navigation'

export default function Search({initialSearch = ''}) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?q=${search}`);
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
        className="button-shadow px-3 py-2 flex-grow rounded-md" 
      /> 
      <Link href={`/search?q=${search}`} className="button-shadow bg-white hover:bg-opacity-90 focus:border-blue-600 focus:ring-0 px-4 py-2 text-md rounded-md flex gap-2 items-center"><SearchIcon height={20}/>Search</Link>
    </div>
    
  )
};