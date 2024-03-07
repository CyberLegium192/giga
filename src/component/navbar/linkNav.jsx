
import {Link} from "react-router-dom"
const menu = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Telent", href: "/telent" }
];
const linkNav = () => {
    return (
        <div
            className='md:static hidden gap-x-9 md:block'
        >
            {menu.map((item, index) => (
                    <MobileListNav
                        title={item.title}
                        href={item.href}
                        key={index}
                    />
            ))}
        </div>
    );
};

function MobileListNav({ title, href }) {
    return (
            <Link
                to={href}
                className="font-poppins mx-4 inline-block md:text-xl text-3xl font-bold tracking-wide relative before:w-full before:absolute before:bottom-0 md:before:h-[3px] before:bg-secondary before:scale-x-0 hover:before:scale-x-100 before:transition-all before:origin-left before:duration-300 before:h-[3px]"
            >
                {title}
            </Link>
    );
}



export default linkNav;
