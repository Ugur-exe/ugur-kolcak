import Image from '../assets/img.jpg'
import { TbBrandFlutter } from "react-icons/tb";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill, RiFirebaseLine } from "react-icons/ri";

import { ReactTyped } from "react-typed";

function Personnel() {
    return (
        <div className='text-white  max-w-[1024px] mx-auto'>
            <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center  md:mt-16 sm:mt-12 mt-4 px-4 max-w-[1024px] ">
                <div className='grid justify-center items-center pt-4 w-full md:w-[60%] md:mr-6'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold mb-3'>
                        Hi, {<ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold mb-3 text-[#ecb2b2]" strings={["I'm Uğur Kolçak", "I'm Software Engineer"]} typeSpeed={90} backSpeed={140} loop />}
                    </p>
                    <p className='md:text-xl sm:text-lg text-xs font-serif text-[#9C9C9C]'>
                        Hi, I'm Uğur Kolçak, a mobile developer specializing in <span className='font-bold text-white'>Flutter</span> and <span className='font-bold text-white'>React</span>. I’m passionate about technology and continuously improving my skills to create user-friendly and high-quality apps.
                    </p>
                    <div className='flex justify-start md:mt-4'>
                        <button className='font-mono hidden md:block md:w-[300px] md:h-[62px] w-[250px] h-[40px] py-2 px-4 mt-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px]'>
                            Let's get started
                        </button>
                    </div>

                </div>

                <div className='flex flex-row  justify-evenly items-center text-[12px]'>
                    <div className='flex justify-start '>
                        <button className='font-mono md:hidden w-[130px] h-[50px] py-2 px-4 mt-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px]  '>Let's get started</button>
                    </div>
                    <div className="w-[150px] h-[150px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden ml-6 mt-6 md:mt-0">
                        <img src={Image} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

            <p className='flex justify-start  font-mono'>Worked with</p>
            <div className='flex flex-wrap justify-between items-center my-12'>
                <div
                    className='cursor-pointer w-[160px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m-4 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://flutter.dev/', '_blank', 'noopener,noreferrer')}
                >
                    <TbBrandFlutter className='text-[40px] mr-2 transition-colors duration-300 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>Flutter</p>
                </div>

                <div
                    className='cursor-pointer w-[160px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m-4 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://react.dev/', '_blank', 'noopener,noreferrer')}
                >
                    <FaReact className='text-[40px] mr-2 transition-colors duration-300 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>React</p>
                </div>

                <div
                    className='cursor-pointer w-[160px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m-4 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://www.javascript.com/', '_blank', 'noopener,noreferrer')}
                >
                    <FaJsSquare className='text-[40px] mr-2 transition-colors duration-300 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>JavaScript</p>
                </div>

                <div
                    className='cursor-pointer w-[160px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m-4 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://tailwindcss.com/', '_blank', 'noopener,noreferrer')}
                >
                    <RiTailwindCssFill className='text-[35px] mr-2 transition-colors duration-300 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>Tailwind Css</p>
                </div>

                <div
                    className='cursor-pointer w-[160px] h-[60px] border-[#1B1B1B] border-[2px] rounded-[6px] flex items-center justify-center text-gray-600 font-mono m-4 
                    transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white hover:bg-opacity-10 hover:text-white'
                    onClick={() => window.open('https://firebase.google.com/', '_blank', 'noopener,noreferrer')}
                >
                    <RiFirebaseLine className='text-[40px] mr-2 transition-colors duration-200 ease-in-out' />
                    <p className='font-bold transition-colors duration-500 ease-in-out'>Firebase</p>
                </div>
            </div>

        </div>

    )
}

export default Personnel