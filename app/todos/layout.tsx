import React from "react";
import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div className="">
        {/* @ts-ignore */}

        <TodosList />
      </div>
      <div className="flex-1 bg-gray-100">{children}</div>
    </main>
  );
}
