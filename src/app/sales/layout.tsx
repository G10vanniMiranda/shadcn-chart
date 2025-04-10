"use client"

import Sidebar from "./_components/sidebar";

const SalesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-green-500 h-screen flex">
            <Sidebar />
            {children}
        </div>
    );
}
export default SalesLayout;