import { RiFirebaseFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";

import { TbBrandFlutter } from "react-icons/tb";
import Image from '../assets/img.jpg';

import { useTranslation } from 'react-i18next';
import { ReactTyped } from "react-typed";

function Personnel() {
    const { t, i18n } = useTranslation();
    
    const currentLang = i18n.language;
    const typedStrings = currentLang === 'tr' 
        ? [t('home.greeting'), t('home.role')]
        : [t('home.greeting'), t('home.role')];

    return (
        <div id='home' className='text-white  max-w-[1024px] mx-auto'>
            <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center  md:mt-16 sm:mt-12 mt-4 px-4 max-w-[1024px] ">
                <div className='grid justify-center items-center pt-4 w-full md:w-[60%] md:mr-6'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold mb-3'>
                        {currentLang === 'tr' ? 'Merhaba, ' : 'Hi, '}{<ReactTyped key={currentLang} className="md:text-5xl sm:text-4xl text-xl font-bold mb-3 text-[#ecb2b2]" strings={typedStrings} typeSpeed={90} backSpeed={140} loop />}
                    </p>
                    <p className='md:text-xl sm:text-lg text-xs font-serif text-[#9C9C9C]'>
                        {t('home.description', { flutter: t('home.flutter'), spring: t('home.spring') })}
                    </p>
                    <div className='flex justify-start md:mt-4'>
                        <button className='font-mono hidden md:block md:w-[300px] md:h-[62px] w-[250px] h-[40px] py-2 px-4 mt-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px]'>
                            {t('home.cta')}
                        </button>
                    </div>

                </div>

                <div className='flex flex-row  justify-evenly items-center text-[12px]'>
                    <div className='flex justify-start '>
                        <button className='font-mono md:hidden w-[130px] h-[50px] py-2 px-4 mt-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px]  '>{t('home.cta')}</button>
                    </div>
                    <div className="w-[150px] h-[150px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden ml-6 mt-6 md:mt-0">
                        <img src={Image} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

            <p className='flex justify-start  font-mono'>{t('home.workedWith')}</p>
            <div className='flex flex-wrap justify-around items-center my-6'>
                <div
                    className='cursor-pointer w-[170px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m-4 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://flutter.dev/', '_blank', 'noopener,noreferrer')}
                >
                    <TbBrandFlutter className='text-[40px] mr-2 transition-colors duration-300 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>Flutter</p>
                </div>

                <div
                    className='cursor-pointer w-[170px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m- 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://spring.io/', '_blank', 'noopener,noreferrer')}
                >
                    <SiSpringboot className='text-[40px] mr-3 transition-colors duration-200 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>Java Spring Boot</p>
                </div>
                 <div
                    className='cursor-pointer w-[170px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m- 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://spring.io/', '_blank', 'noopener,noreferrer')}
                >
                    <RiFirebaseFill className='text-[40px] mr-3 transition-colors duration-200 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>Firebase</p>
                </div>

            </div>

        </div>

    )
}

export default Personnel