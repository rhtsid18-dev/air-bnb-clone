import Image from "next/image";
import { FC } from "react";

const Header:FC = function () {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    src="https://links.papareact.com/qd3" 
                    alt="Air BnB"
                    fill={true}
                    style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>

            {/* Middle */}
            <div></div>

            {/* Right */}
            <div></div>
        </header>
    )
}

export default Header;