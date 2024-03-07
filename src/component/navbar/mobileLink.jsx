import { motion, AnimatePresence } from "framer-motion";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// MOBILE AFTER MAPPING
const mobileListVart = {
    initial: {
        y: "20vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1]
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.45, 1]
        }
    }
};
// MENU VARIANTS
const menuVars = {
    initial: {
        scaleY: 0
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0]
        }
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 0.5,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};
// CONTAINER VARIANTS
const containVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.4,
            staggerDirection: 1
        }
    }
};

const MobileListNav = ({ open, handelOpen, menu }) => {
    return (
        <div className='md:hidden z-50'>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`flex flex-col items-center justify-center h-full fixed z-40 bg-primary left-0 top-0 w-full origin-top gap-y-7 overflow-hidden`}
                    >
                        <motion.div
                            variants={containVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className={`flex flex-col items-center justify-center h-full absolute top-0 bg-paperWhite left-0 top w-full origin-top gap-y-7`}>
                            
                            {/* CIRCLE COMPONENT */}
                            {/* <div className="w-full overflow-hidden">
                            <motion.div
                                variants={mobileListVart}
                                className="w-56 h-56 bg-[#191e1f4a] absolute -bottom-12 -left-20 rounded-full before:w-48 before:h-48 before:bg-primary z-10 before:absolute before:bottom-0 before:left-0 before:rounded-full before:opacity-70">
                            </motion.div>
                            </div> */}
                            {/* CIRCLE COMPONENT END*/}


                            <div className="md:hidden top-2 right-2 absolute overflow-hidden">
                            <motion.button variants={mobileListVart} >
                                <IoCloseOutline
                                    size={47}
                                    onClick={handelOpen}
                                />
                            </motion.button>
                            </div>
                            {menu.map((item, index) => (
                                <div className="overflow-hidden">
                                    <MobileLink
                                        title={item.title}
                                        href={item.href}
                                        key={index}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>  
    );
};

function MobileLink({ title, href }) {
    return (
        <motion.div variants={mobileListVart}>
            <Link
                to={href}
                className="font-poppins md:text-xl text-4xl font-bold tracking-wide relative before:w-full before:absolute before:bg-secondary before:scale-x-0 hover:before:scale-x-100 before:transition-all before:origin-left before:duration-300 before:h-[20px] before:bottom-1 before:rounded-md before:-z-10"
            >
                {title}
            </Link>
        </motion.div>
    );
}

export default MobileListNav;
