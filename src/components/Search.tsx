"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchComponent = () => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        placeholder="Cari..."
        className="mr-2 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParam.get("query")?.toString()}
      />
      <button className="mr-2 rounded-md bg-primary px-4 py-2 text-white">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchComponent;
