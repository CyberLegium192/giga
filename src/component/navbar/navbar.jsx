import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import LinkNav from "./linkNav.jsx"
import MobileLinkNav from './mobileLink.jsx'

const menu = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Telent", href: "/telent" },
    { title: "Contact", href: "/contact" },
    { title: "Audition", href: "/audition" }
];

const navbar = () => {
    const [open, setOpen] = useState(false);
    const [isChange, setIsChange] = useState(false)

    const handelOpen = () => {
        setOpen(!open);
    };


    useEffect(() => {
      window.addEventListener('scroll' , ()=> {
        const windowY = window.scrollY
        console.log(windowY)
        if (windowY >= 728.888916015625) {
          setIsChange(true)
        } else{
            setIsChange(false)
        }
      })
      
    }, [])




    return (
        <div className={`w-full shadow-md fixed top-0 md:backdrop-blur-sm transition-all duration-300 max-sm:bg-white ${isChange ? 'bg-white' : 'bg-white/40 shadow-lg ring-1 ring-black/30'} z-50`} >
            <div className="p-3 md:flex justify-between items-center md:px-9 flex justify-between items-center">
                <div className="w-36 md:w-36">
                    <img
                        src="https://gigaofficial.id/aset/icon/giga.png"
                        className="w-full object-cover"
                    /> 
                </div>
                
                <LinkNav menu={menu}/>
                <MobileLinkNav open={open} handelOpen={handelOpen} menu={menu}/>
                
                
                <button className="md:hidden inline-block">
                    <IoMenuOutline size={40} onClick={handelOpen} />
                </button>
            </div>
        </div>
    );
};


export default navbar;
