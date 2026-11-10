import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <label
          htmlFor="rail-toggle"
          aria-hidden="true"
          className="fixed inset-0 z-30 hidden bg-gray-900/50 peer-checked:block lg:hidden"
        />

        <Sidebar />

        <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}