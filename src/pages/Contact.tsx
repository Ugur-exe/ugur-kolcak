
function Contact() {
    return (
        <div className='mt-8 text-white flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-3xl'>Get In Touch</h1>
                <p className='text-[#9C9C9C] font-mono w-full max-w-[750px] mt-4 px-2'>
                    Don't hesitate to get in touch! I'd love to discuss new projects, collaborations, or career opportunities. Whether you want to share an idea or work together on a project, you can reach out using the form below.
                </p>
            </div>
            <div className="flex flex-col max-w-[600px] w-full mt-8 px-4">
                <h3 className="font-bold font-mono">Email</h3>
                <input type="email" placeholder="Please enter your email" className="font-mono w-full h-[40px] mt-2 p-2 rounded-md text-black" />

                <h3 className="font-bold font-mono mt-4">Mobile</h3>
                <input
                    type="tel" pattern="[0-9]*" placeholder="Please enter mobile" maxLength={11} className="font-mono w-full h-[40px] mt-2 p-2 rounded-md text-black"
                />

                <h3 className="font-bold font-mono mt-4">Message</h3>
                <textarea placeholder="Enter your message" className="font-mono w-full h-[150px] mt-2 p-2 rounded-md text-black resize-none" />

                <div className='flex justify-center mt-4 pb-24'>
                    <button className='font-mono w-full md:w-full h-[40px] py-2 px-4 bg-[#3F8E00] text-white font-bold rounded-[2px] border-[#62BA1B] border-[2px] hover:bg-[#4CAF50] transition-colors duration-300 ease-in-out'>
                        Submit {'>'}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Contact