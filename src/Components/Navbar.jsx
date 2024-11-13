import React from 'react';
import logo from '../../public/Logo.png';
import Button from '@mui/material/Button';

export default function Navbar() {
    const navItems = ["About", "Services", "Projects", "Contacts"];
    
    return (
        <header className=' py-3 border border-b-[#00000] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] '  >
            <div className="container mx-auto overflow-hidden flex justify-between items-center">
                {/* Logo Section */}
                <div>
                    <a href="#"><img src={logo} alt="Logo" className="max-h-36" /></a>
                </div>
                
                {/* Navbar Menu */}
                <nav className='flex gap-[29px] items-center ' >
                    <ul className="flex gap-8 text-gray-700">
                        {navItems.map((item) => (
                            <li key={item} className="hover:text-[#2AB691] transition-colors duration-300">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div>
                    <Button variant="outlined" style={{backgroundColor:'#2AB6911A' , color:'#2AB691' , border:'1px solid  #2AB691' }} >Sign Up</Button>
                </div>
                </nav>

            </div>
        </header>
    );
}
