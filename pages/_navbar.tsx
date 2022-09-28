import { ReactNode } from "react";
import Logo from "../assets/Logo";

export default function Navbar() {
    return ( 
        <div className="">
            <div className="h-2 px-24 py-10 flex items-center cursor-pointer">
                <Logo />
                <p className="ml-3 font-semibold">Coders NFT</p>
            </div>
            <hr className="w-full border-[#242634]" />
        </div>
    )
}