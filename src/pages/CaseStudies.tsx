import img1 from '../assets/project-1.png'
import img2 from '../assets/project-2.png'

function CaseStudies() {
    return (
        <div className='flex-col justify-center items-center bg-white h-full'>
            <h1 className='flex justify-center items-center pt-8 font-bold text-[28px] sm:text-[32px] md:text-[34px]'>
                Case Studies
            </h1>
            <p className="px-4 sm:px-16 md:px-32 font-mono text-[#9C9C9C] text-center mt-2">
                Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start mt-16 max-w-[1240px] mx-auto px-4 sm:px-16 md:px-32">
                <div className="flex-col justify-start items-start mb-4 md:mb-0">
                    <p className="ml-3 font-bold text-[#FFA217]">Fintech</p>
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl mt-2">Eczane Kapında</h1>
                    <p className="w-full sm:w-[400px] md:w-[480px] text-[#9C9C9C] font-mono mt-2">
                        The "Eczane Kapında" application is an innovative mobile app that allows users to order medications from the nearest pharmacies and have those orders delivered to their doorsteps.
                    </p>
                    <button className="bg-[#FFA217] w-full sm:w-[180px] md:w-[200px] h-[40px] rounded-[8px] text-white font-bold mt-8 font-mono hover:bg-[#e69617] shadow-lg transition-shadow duration-300 ease-in-out" onClick={() => window.open('https://github.com/Ugur-exe/capstone_project--Eczane-Kapinda-', '_blank', 'noopener,noreferrer')}>
                        View case study {'>'}
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <img src={img1} className='w-full sm:w-[300px] md:w-[380px] h-[300px] sm:h-[300px] md:h-[380px] rounded-[24px] border border-gray-800' alt="Eczane Kapında" />
                </div>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start mt-16 max-w-[1240px] mx-auto px-4 sm:px-16 md:px-32">
                <div className="flex justify-center items-center mb-4 md:mb-0">
                    <img src={img2} className='w-full sm:w-[300px] md:w-[380px] h-[500px] sm:h-[600px] md:h-[680px] rounded-[24px] border border-gray-800' alt="Eczane Kapında" />
                </div>
                <div className="flex-col justify-start items-start">
                    <p className="ml-3 font-bold text-[#000AFF] bg-[#D0E6FF] inline-block px-2 py-1 rounded-xl">Shorts</p>

                    <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl mt-2">Eczane Kapında</h1>
                    <p className="w-full sm:w-[400px] md:w-[480px] text-[#9C9C9C] font-mono mt-2">
                        The "Eczane Kapında" application is an innovative mobile app that allows users to order medications from the nearest pharmacies and have those orders delivered to their doorsteps.
                    </p>

                    <button className="bg-[#000AFF] w-full sm:w-[180px] md:w-[200px] h-[40px] rounded-[8px] text-white font-bold mt-8 font-mono hover:bg-[#0000d4] shadow-lg transition-shadow   duration-300 ease-in-out" onClick={() => window.open('https://github.com/Ugur-exe/flutter_shorts', '_blank', 'noopener,noreferrer')}>
                        View case study {'>'}
                    </button>
                </div>
            </div>

            <div className='flex justify-center items-center mt-12'>
                <button className='bg-[#fc2e2e] w-full sm:w-[180px] md:w-[200px] h-[40px] rounded-[8px] text-white font-bold mt-8 font-mono border border-black hover:bg-[#d12424] shadow-lg transition-shadow duration-300 ease-in-out'>
                    Click for more...
                </button>
            </div>
        </div>

    )
}

export default CaseStudies