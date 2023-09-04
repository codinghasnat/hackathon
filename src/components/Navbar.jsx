import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar z-[10] ">
            <img src={logo} alt="HaqqLogo" className="w-[130px] h-[130px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[10]">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[20px] text-white
                        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex items-center ml-4 z-[10]">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}
                />
                {toggle && (
                    <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[10] ">
                        <ul className="list-none flex flex-col justify-end items-center flex- z-[10]">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white  z-[10]
                                    ${
                                        index === navLinks.length - 1
                                            ? "mb-0"
                                            : "mb-4"
                                    }`}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
