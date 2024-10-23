import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    // Mobil menü görünürlüğü için bir state tanımlıyoruz
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-[#1B1B1B] h-24 max-w-[1240px] mx-auto px-4 text-white rounded-b-xl">
            {/* Büyük ekranlarda görünen ana menü */}
            <ul className="hidden md:flex w-full justify-evenly text-[#9C9C9C] text-[18px]">
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]">
                    Home
                </li>
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]">
                    Case Studies
                </li>
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]">
                    Testimonials
                </li>
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]">
                    Recent work
                </li>
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]">
                    Get In Touch
                </li>
                <div className="flex items-center justify-evenly text-[22px] w-[80px]">
                    <FaLinkedinIn className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" />
                    <FaGithub className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" />
                </div>
            </ul>

            {/* Mobil menü açma/kapatma butonu */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-[#9C9C9C] text-3xl "
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobil menü içeriği */}
            <div
                className={`fixed top-0 left-0 h-screen bg-[#1B1B1B] text-[#9C9C9C] text-[18px] md:hidden flex flex-col items-center justify-center transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ width: '70%' }} // Menünün yatayda %70 yer kaplaması için stil
            >
                {/* Kapatma butonu */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 text-[#9C9C9C] text-3xl "
                >
                    <FaTimes />
                </button>


                <ul className="flex flex-col items-center mt-10">
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300">
                        Home
                    </li>
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300">
                        Case Studies
                    </li>
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300">
                        Testimonials
                    </li>
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300">
                        Recent work
                    </li>
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300">
                        Get In Touch
                    </li>
                    <div className="flex items-center justify-evenly text-[22px] w-[80px] py-4">
                        <FaLinkedinIn className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" />
                        <FaGithub className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
