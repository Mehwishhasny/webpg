import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex-grow w-full flex flex-col justify-center items-center bg-cover bg-center mb-10 mt-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 36, 57, 0.96), rgba(20, 40, 20, 0.26)), url(/images/about1.jpg)',
        }}
      >
        <h2 className="sm:text-3xl text-2xl font-bold text-white text-center mt-10">ABOUT US</h2>
        <p className="text-lg text-white text-center max-w-2xl mt-6 px-4 mb-6">
          We are a team of experienced professionals with a passion for creating innovative digital experiences for businesses and individuals. Our mission is to help brands transform their ideas into impactful, user-centric designs and scalable solutions that help them grow and thrive in the digital world.
          <br /><br />
          At Wrafty Creations, we believe in fostering a collaborative and innovative environment, where every team member plays a vital role in delivering exceptional digital services. Our goal is to work together to provide our clients with top-notch solutions, helping them succeed in their digital ventures while continuously growing and improving as a team.
        </p>

        <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-white text-center mt-20">MEET OUR TEAM</h2>

        <div className="flex flex-row justify-center gap-6 grid sm:grid-cols-3 grid-col-1 flex-wrap">
            <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center">
        <Image 
        src="/images/team1.png"
        alt="Team"
        width={250}
        height={250}
        className="rounded-full"
        />
         <h3 className="mt-4 text-xl font-semibold text-black">Jane Smith</h3>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center">
        <Image 
        src="/images/team3.png"
        alt="Team"
        width={200}
        height={200}
        className="rounded-full"
        />
         <h3 className="mt-4 text-xl font-semibold text-black">Kate Smith</h3>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center">
        <Image 
        src="/images/team2.jpg"
        alt="Team"
        width={220}
        height={220}
        className="rounded-full"
        />
         <h3 className="mt-4 text-xl font-semibold text-black">John Datte</h3>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center">
        <Image 
        src="/images/team4.jpg"
        alt="Team"
        width={160}
        height={160}
        className="rounded-full"
        />
         <h3 className="mt-4 text-xl font-semibold text-black">Robinson Hagwartts</h3>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center">
        <Image 
        src="/images/team5.jpg"
        alt="Team"
        width={300}
        height={300}
        className="rounded-full"
        />
         <h3 className="mt-4 text-xl font-semibold text-black">Emma Johnson</h3>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg p-4 m-6 flex flex-col items-center">
        <Image 
        src="/images/team6.jpg"
        alt="Team"
        width={200}
        height={200}
        className="rounded-full"
        />
         <h3 className="mt-4 text-xl font-semibold text-black">Leo Mathew</h3>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    

        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}
