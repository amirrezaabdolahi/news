"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBtn = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const router = useRouter();
    const handleSearch = () => {
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }

    return (
        <div className="border mx-auto my-10 rounded-full px-3 py-2 w-1/2 flex items-center justify-between">
            <input
                type="text"
                placeholder="Search for news..."
                className="outline-none rounded-full ml-4 w-full py-2 placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-4 rounded-full ml-2 cursor-pointer hover:bg-blue-700 active:scale-95 transition"
            ><CiSearch />

            </button>
        </div>
    )
}

export default SearchBtn