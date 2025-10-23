"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import SearchBtn from "@/components/SearchBtn";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {

  const [searchQuery, setSearchQuery] = React.useState("");

  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center container mx-auto gap-8">
      <h1 className="text-2xl font-bold ">Welcome to EveryNews</h1>
      <div className="border rounded-full px-3 py-2 w-1/2 flex items-center justify-between">
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
      <div className="">
        <h2 className="text-xl font-bold mb-4">searching articles</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg relative overflow-hidden  w-80 h-50 flex items-center justify-center group transition-all">
            <img src="/assets/tops.jpg" alt="news" className="w-full " />
            <div className="transition-all absolute top-0 right-0 left-0 bottom-0 bg-gray-600/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <Link href="/tops" className="flex gap-2 items-center hover:text-blue-200 capitalize transition-all">
                <p>tops</p>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className="rounded-lg relative overflow-hidden  w-80 h-50 flex items-center justify-center group transition-all">
            <img src="/assets/buisness.jpg" alt="news" className="w-full " />
            <div className="transition-all absolute top-0 right-0 left-0 bottom-0 bg-gray-600/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <Link href="/tops" className="flex gap-2 items-center hover:text-blue-200 capitalize transition-all">
                <p>buisness</p>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className="rounded-lg relative overflow-hidden  w-80 h-50 flex items-center justify-center group transition-all">
            <img src="/assets/crypto.jpg" alt="news" className="w-full " />
            <div className="transition-all absolute top-0 right-0 left-0 bottom-0 bg-gray-600/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <Link href="/tops" className="flex gap-2 items-center hover:text-blue-200 capitalize transition-all">
                <p>crypto</p>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
