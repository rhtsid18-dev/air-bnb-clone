import Image from "next/image";
import { FC } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header:FC = function () {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    src="https://links.papareact.com/qd3" 
                    alt="Air BnB"
                    fill={true}
                    style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>

            {/* Middle - Search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input type="text" placeholder="Start your search" className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" />
                <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* Right */}
            <div></div>
        </header>
    )
}

export default Header;