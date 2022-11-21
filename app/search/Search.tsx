"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Type here..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="p-2 px-4 rounded border bg-green-700">
        Search
      </button>
    </form>
  );
}

export default Search;
