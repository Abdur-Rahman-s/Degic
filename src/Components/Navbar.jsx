import React, { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import logo from '../../public/Logo.png';
import Button from '@mui/material/Button';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    function togglelMenu() {
        setOpen((prevOpen) => !prevOpen)
    }
    const navItems = ["About", "Services", "Projects", "Contacts"];
    return (
        <header >
            <div className='px-4 lg:px-0 z-50  py-3 text-[#000] border border-b-[#00000] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] '   >
                <div className=" md:mx-12 overflow-hidden flex justify-between items-center">
                    {/* Logo Section */}
                    <div>
                        <a href="#"><img src={logo} alt="Logo" className="max-h-36" /></a>
                    </div>

                    {/* Navbar Menu */}
                    <nav className='flex gap-[29px] items-center ' >
                        <ul className="sm:flex gap-8 text-gray-700 hidden ">
                            {navItems.map((item) => (
                                <li key={item} className="hover:text-[#2AB691] transition-colors duration-300">
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>

                        {/* mobileMenu icon  */}
                        <div className='block sm:hidden ' onClick={togglelMenu} >
                            <FiAlignRight />
                        </div>
                        {/* singUp Button  */}
                        <div>
                            <Button variant="outlined" style={{ backgroundColor: '#2AB6911A', color: '#2AB691', border: '1px solid  #2AB691' }} >Sign Up</Button>
                        </div>
                    </nav>
                </div>
            </div>
            {/* mobilemenu  */}
            {open && (
                <div className="sm:hidden bg-slate-500 w-1/2 z-50 animate-slideInRight fixed top-0 right-0 h-full  ">
                    <RxCross1 className='ml-5 mt-5 ' onClick={togglelMenu} /> 
                    <ul className="flex flex-col items-start ml-5 font-bold gap-4 py-4 text-gray-700">
                        {navItems.map((item) => (
                            <li key={item} className="hover:text-[#2AB691] transition-colors duration-300">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
