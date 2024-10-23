import Image from '../assets/img.jpg'
import { ReactTyped } from "react-typed";

function Personnel() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center text-white md:mt-16 sm:mt-12 mt-4 px-4 w-full max-w-[1024px]">
            <div className='grid justify-center items-center pt-4 w-full md:w-[60%] md:mr-6'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold mb-3'>
                    Hi, {<ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold mb-3 text-[#ecb2b2]" strings={["I'm Uğur Kolçak", "I'm Software Engineer"]} typeSpeed={90} backSpeed={140} loop />}
                </p>
                <p className='md:text-xl sm:text-lg text-xs font-serif text-[#9C9C9C]'>
                    Hi, I'm Uğur Kolçak, a mobile developer specializing in <span className='font-bold text-white'>Flutter</span> and <span className='font-bold text-white'>React</span>. I’m passionate about technology and continuously improving my skills to create user-friendly and high-quality apps.
                </p>
                <div className='flex justify-start md:mt-4'>
                    <button className='font-mono md:w-[300px] md:h-[62px] w-[250x] h-[40px] py-2 px-4 mt-4 hidden bg-[#3F8E00] text-white font-bold  rounded-[2px] border-[#62BA1B] border-[2px]'>Let's get starded</button>
                </div>
            </div>

            <div className='flex flex-row w-full justify-evenly items-center text-[12px]'>
                <div className='flex justify-start md:mt-4'>
                    <button className='font-mono w-[130px] h-[50px] py-2 px-4 mt-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px]'>Let's get started</button>
                </div>
                <div className="w-[150px] h-[150px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden ml-6 mt-2 md:mt-0">
                    <img
                        src={Image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>

    )
}

export default Personnel