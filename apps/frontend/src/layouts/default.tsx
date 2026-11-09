import React from "react";

// sub-components
import Header from "./components/header";
// import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />

            <div className="flex flex-1 overflow-hidden">
                <label
                    htmlFor="rail-toggle"
                    aria-hidden="true"
                    className="fixed inset-0 z-30 hidden bg-gray-900/50 peer-checked:block lg:hidden"
                ></label>

                <Sidebar />

                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </>
    );
}