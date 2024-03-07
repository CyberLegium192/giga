import { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import LinkNav from "./linkNav.jsx"
import MobileLinkNav from './mobileLink.jsx'

const menu = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Telent", href: "/telent" }
];

const navbar = () => {
    const [open, setOpen] = useState(false);
    const handelOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-[#f5f4f4] w-full shadow-md">
            <div className="p-3 md:flex justify-between items-center md:px-9 flex justify-between items-center">
                <div className="w-36 md:w-36">
                    <img
                        src="https://gigaofficial.id/aset/icon/giga.png"
                        className="w-full object-cover"
                    />
                </div>
                
                <LinkNav />
                <MobileLinkNav open={open} handelOpen={handelOpen} menu={menu}/>
                
                
                <button className="md:hidden inline-block">
                    <IoMenuOutline size={40} onClick={handelOpen} />
                </button>
            </div>
        </div>
    );
};


export default navbar;
