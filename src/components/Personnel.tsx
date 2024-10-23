import Image from '../assets/img.jpg'
import { ReactTyped } from "react-typed";

function Personnel() {
    return (
        <div className="flex flex-col md:flex-row justify-center mx-auto items-center text-white mt-24 w-full max-w-[1024px]">
    <div className='grid justify-center items-center pt-4 w-full md:w-[60%] md:mr-6'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold mb-3'>
            Hi, {<ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold mb-3 text-[#ecb2b2]" strings={["I'm Uğur Kolçak", "I'm Software Engineer"]} typeSpeed={90} backSpeed={140} loop />}
        </p>
        <p className='md:text-xl sm:text-lg text-xs font-serif text-[#9C9C9C]'>
            Hi, I'm Uğur Kolçak, a mobile developer specializing in <span className='font-bold text-white'>Flutter</span> and <span className='font-bold text-white'>React</span>. I’m passionate about technology and continuously improving my skills to create user-friendly and high-quality apps.
        </p>
    </div>

    <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden mt-6 md:mt-0">
        <img
            src={Image}
            alt="Profile"
            className="w-full h-full object-cover"
        />
    </div>
</div>


    )
}

export default Personnel