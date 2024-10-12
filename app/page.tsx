import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Services } from '@/components/services';
import { Reviews } from '@/components/reviews';

export default function Home() {
  return (
<div className="bg-white">
    <Header />

    <div className="w-full flex sm:flex-row flex-col min-h-screen sm:h-screen items-center justify-center sm:mb-40 mb-20 sm:p-4">
      <div className="flex flex-col text-blue-800 text-left p-6 sm:w-1/2 w-full mt-6">
        <h1 className="sm:text-3xl text-2xl font-bold mt-2">WE DRIVE YOUR BUSINESS FORWARD</h1>
        <p className="text-gray-600 mt-6 text-lg">We create exceptional digital experiences for businesses and individuals by offering a range of specialized services, including logo design, website development, branding solutions, and digital marketing strategies. Our focus is on transforming ideas into impactful, user-centric designs and scalable solutions that help brands grow and thrive in the digital world. Whether you need a custom-built website, an eye-catching logo, or a complete digital presence overhaul, we are here to make your vision a reality.</p>
      </div>

      <div className="flex sm:items-center justify-center h-full sm:w-1/2 w-full">
      <div className="grid grid-cols-1 gap-4 w-full">
    <Image 
      src="/images/home.jpeg" 
      alt="Hero Image" 
      width={320} 
      height={440}
      className="sm:absolute sm:translate-x-[20%] sm:translate-y-[-135%] sm:z-40 sm:object-cover"
    />
    <Image 
      src="/images/home2.jpg" 
      alt="Hero Image" 
      width={420} 
      height={640} 
      className="sm:absolute sm:translate-x-[50%] sm:translate-y-[-45%] sm:z-10 sm:object-cover"
    />
    <Image 
      src="/images/home3.jpg" 
      alt="Hero Image" 
      width={320} 
      height={440} 
      className="sm:absolute sm:translate-x-[20%] sm:translate-y-[55%] sm:z-40 sm:object-cover"
    />
</div>
</div>

    </div>

    <Services />

    <Reviews />
    
    <Footer />
    </div>
  );
}
