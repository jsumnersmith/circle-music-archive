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

  const getSearchUrl = () => {
    if (search === '') { return '/'} 
    return `/search?q=${search}`;
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      router.push(getSearchUrl());
    }
  }
  return (
    <div className="flex gap-3 my-6 items-center w-full">
      <input 
        type="text"
        placeholder="Search by song, artist name, or lyrics"
        value={search}
        onChange={handleChange}
        onKeyPress={handleEnter}
        className="border-cool-gray-200 border px-3 py-2 flex-grow rounded-md" 
      /> 
      <Link href={getSearchUrl()} className="button-shadow bg-white hover:bg-opacity-90 focus:border-blue-600 focus:ring-0 px-4 py-2 text-md rounded-md flex gap-2 items-center"><SearchIcon height={20}/>Search</Link>
    </div>
    
  )
};