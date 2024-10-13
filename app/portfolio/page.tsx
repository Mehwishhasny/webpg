import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio(){
    return(
        <div className="flex flex-col sm:h-screen min-h-screen bg-white">
        <Header />
        <div className="flex-grow w-full flex flex-col justify-center items-center bg-cover bg-center mb-10 mt-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(20, 36, 57, 0.96), rgba(20, 40, 20, 0.26)), url(/images/about1.jpg)',
          }}
        >

<div className="w-full flex sm:flex-row flex-col min-h-screen sm:min-h-screen items-center justify-center sm:mb-40 mb-20 sm:p-4">
                <div className="flex flex-col sm:w-1/2 w-full sm:flex-row"
                style={{
                    background: 'linear-gradient(rgba(20,80,20,0.5), rgba(20,20,90,0.2)), url(/images/portfolio-bg.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '40%',
                    marginTop: '150px',
                }}>
                    <h1 className="sm:text-3xl text-2xl font-bold text-white text-center sm:translate-x-[190%] sm:translate-y-[40%] mt-10">Portfolio</h1>
                </div>
        

<div className="flex flex-row justify-center gap-4 grid sm:grid-cols-2 grid-col-1 flex-wrap sm:w-1/2 w-full">
            <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center cursor-pointer hover:bg-gray-400 hover:bg-none">
        <Link href="https://www.google.com">
        <Image 
        src="/images/portfolio1.png"
        alt="Logo"
        width={250}
        height={250}
        className="rounded-lg"
        />
         <h3 className="mt-4 sm:text-xl text-lg font-semibold text-center text-black">Logo Designing</h3>
         </Link>
        </div>

        <Link href="https://www.google.com">
        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center cursor-pointer hover:bg-gray-400 hover:bg-none">
        <Image 
        src="/images/portfolio2.png"
        alt="Web Development"
        width={250}
        height={250}
        className="rounded-lg"
        />
         <h3 className="mt-4 sm:text-xl text-lg font-semibold text-black">E-commerce Website</h3>
        </div>
        </Link>

        <Link href="https://www.google.com">
        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center cursor-pointer hover:bg-gray-400 hover:bg-none">
        <Image 
        src="/images/portfolio1.png"
        alt="app"
        width={250}
        height={250}
        className="rounded-lg"
        />
         <h3 className="mt-4 sm:text-xl text-lg font-semibold text-black">Mobile Application</h3>
        </div>
        </Link>

        <Link href="https://www.google.com">
        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center cursor-pointer hover:bg-gray-400 hover:bg-none">
        <Image 
        src="/images/portfolio2.png"
        alt="weather app"
        width={250}
        height={250}
        className="rounded-lg"
        />
         <h3 className="mt-4 sm:text-xl text-lg font-semibold text-black">Weather App</h3>
        </div>
        </Link>

        <Link href="https://www.google.com">
        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center cursor-pointer hover:bg-gray-400 hover:bg-none">
        <Image 
        src="/images/portfolio1.png"
        alt="marketing"
        width={250}
        height={250}
        className="rounded-lg"
        />
         <h3 className="mt-4 sm:text-xl text-lg font-semibold text-black">Digital Marketing</h3>
        </div>
        </Link>
</div>
</div>


            </div>

            <Footer />
            </div>
            
    )
}