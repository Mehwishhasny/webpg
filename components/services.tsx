
import Image from 'next/image';

export function Services() {
    return (
        <div className="flex flex-col p-8 items-center sm:h-screen min-h-screen w-full">
            <h2 className="sm:text-3xl text-2xl font-bold text-blue-800 text-center mb-8">WHAT WE'RE OFFERING</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-8 mb-10">
                
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/service1.png" alt="Graphic Designing" width={180} height={180} className="mb-4 shadow-xl"/>
                    <h3 className="text-xl font-bold text-black mt-5">Graphic Designing</h3>
                    <p className="text-gray-600 mt-4">Custom logos, branding, and visuals to make your brand stand out.</p>
                </div>

            
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/service2.png" alt="Website Development" width={270} height={270} className="mb-4 shadow-xl"/>
                    <h3 className="text-xl font-bold text-black mt-5">Website Development</h3>
                    <p className="text-gray-600 mt-4">Build responsive and scalable websites tailored to your needs.</p>
                </div>

            
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/service3.png" alt="Digital Marketing" width={270} height={270} className="mb-4 shadow-xl"/>
                    <h3 className="text-xl font-bold text-black mt-5">Digital Marketing</h3>
                    <p className="text-gray-600 mt-4">Effective marketing strategies to enhance your online presence.</p>
                </div>

                
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/service4.png" alt="Mobile App" width={170} height={170} className="mb-4 shadow-xl"/>
                    <h3 className="text-xl font-bold text-black mt-2">Mobile Application</h3>
                    <p className="text-gray-600 mt-4"> Intuitive and scalable mobile apps for Android and iOS.</p>
                </div>

            </div>
        </div>
    );
}
