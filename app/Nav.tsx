import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-blue-500 flex justify-center">
      <div className="lg:w-2/3 py-2 text-white flex items-center space-x-4">
        <p>NEXT JS 13</p>
        <Link href="/" className="p-1 px-2 uppercase border">
          Home
        </Link>
        <Link href="/todos">Todos</Link>
        <Link href="/search">Search</Link>
      </div>
    </header>
  );
}
