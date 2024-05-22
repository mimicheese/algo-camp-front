import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="mb-12 text-6xl font-bold text-gray-800">Mimisan Camp</div>
                <div className="mb-6">
                    <label className="block text-gray-800 mb-2">User ID</label>
                    <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Enter your User ID" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-800 mb-2">Password</label>
                    <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="password" placeholder="Enter your Password" />
                </div>
                <div>
                <Link href="/about">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Login</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Page;