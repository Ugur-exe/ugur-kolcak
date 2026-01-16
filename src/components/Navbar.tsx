import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex justify-between items-center bg-[#1B1B1B] h-24 max-w-[1240px] mx-auto px-4 text-white rounded-b-xl">
            <ul className="hidden md:flex w-full justify-evenly text-[#9C9C9C] text-[18px]">
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" onClick={() => scrollToSection('home')}>
                    {t('nav.home')}
                </li>
                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" onClick={() => scrollToSection('case-studies')}>
                    {t('nav.caseStudies')}
                </li>

                <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" onClick={() => scrollToSection('contact')}>
                    {t('nav.getInTouch')}
                </li>
                <div className="flex items-center justify-evenly gap-3 text-[22px] w-[200px]">
                    <div className="flex gap-2">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-sm font-bold px-2 py-1 rounded transition-all duration-300 ${i18n.language === 'en' ? 'bg-[#62BA1B] text-white' : 'text-[#9C9C9C] hover:text-white'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('tr')}
                            className={`text-sm font-bold px-2 py-1 rounded transition-all duration-300 ${i18n.language === 'tr' ? 'bg-[#62BA1B] text-white' : 'text-[#9C9C9C] hover:text-white'}`}
                        >
                            TR
                        </button>
                    </div>
                    <FaLinkedinIn className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" onClick={() => window.open('https://www.linkedin.com/in/u%C4%9Fur-kol%C3%A7ak/', '_blank', 'noopener,noreferrer')} />
                    <FaGithub className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-[400ms]" onClick={() => window.open('https://github.com/Ugur-exe', '_blank', 'noopener,noreferrer')} />
                </div>
            </ul>

            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-[#9C9C9C] text-3xl "
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen bg-[#1B1B1B] text-[#9C9C9C] text-[18px] md:hidden flex flex-col items-center justify-center transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ width: '70%' }}
            >
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 text-[#9C9C9C] text-3xl "
                >
                    <FaTimes />
                </button>


                <ul className="flex flex-col items-center mt-10">
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" onClick={() => scrollToSection('home')}>
                        {t('nav.home')}
                    </li>
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" onClick={() => scrollToSection('case-studies')}>
                        {t('nav.caseStudies')}
                    </li>
                    <li className="p-4 cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" onClick={() => scrollToSection('contact')}>
                        {t('nav.getInTouch')}
                    </li>
                    <div className="flex gap-3 py-4">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-sm font-bold px-3 py-2 rounded transition-all duration-300 ${i18n.language === 'en' ? 'bg-[#62BA1B] text-white' : 'text-[#9C9C9C] hover:text-white'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('tr')}
                            className={`text-sm font-bold px-3 py-2 rounded transition-all duration-300 ${i18n.language === 'tr' ? 'bg-[#62BA1B] text-white' : 'text-[#9C9C9C] hover:text-white'}`}
                        >
                            TR
                        </button>
                    </div>
                    <div className="flex items-center justify-evenly text-[22px] w-[80px] py-4">
                        <FaLinkedinIn className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" onClick={() => window.open('https://www.linkedin.com/in/u%C4%9Fur-kol%C3%A7ak/', '_blank', 'noopener,noreferrer')} />
                        <FaGithub className="cursor-pointer hover:shadow-lg hover:shadow-white transition-shadow duration-300" onClick={() => window.open('https://github.com/Ugur-exe', '_blank', 'noopener,noreferrer')} />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
