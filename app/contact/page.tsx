import { Header } from '../../components/header';
import { Footer } from '../../components/footer';


export default function Contact() {
    return (
        <div className="bg-white">
            <Header />
  
            <div className="flex flex-col items-center gap-4 sm:h-screen min-h-screen w-full p-4 sm:p-2 sm:mb-24">
                <h2 className="sm:text-3xl text-2xl font-bold text-blue-800 text-center mt-10 sm:mt-12">Contact Us</h2>
  
                <form 
                    action="mailto:mehwish.hasny@gmail.com" 
                    method="POST" 
                    encType="text/plain" 
                    className="w-full max-w-xl flex flex-col gap-4">
                    
                    <label htmlFor="name" className="text-gray-600 text-lg sm:text-lg text-sm">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="border-2 border-gray-300 p-2 sm:p-3 w-full rounded-md sm:text-lg text-sm" 
                        required 
                    />
  
                    <label htmlFor="email" className="text-gray-600 text-lg sm:text-lg text-sm mt-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className="border-2 border-gray-300 p-2 sm:p-3 w-full rounded-md sm:text-base text-sm mt-2" 
                        required 
                    />
  
                    <label htmlFor="message" className="text-gray-600 text-lg sm:text-lg text-sm mt-2">Message</label>
                    <textarea 
                        id="message" 
                        name="message"
                        className="border-2 border-gray-300 p-2 sm:p-3 w-full rounded-md sm:text-base text-sm mt-2 h-40 sm:h-48" 
                        required 
                    ></textarea>
  
                    <button 
                        type="submit" 
                        className="flex justify-center items-center px-4 py-2 sm:px-6 sm:py-3 text-white font-bold bg-blue-800 rounded-md mt-6 hover:bg-gray-600 sm:text-lg text-sm">
                        Submit
                    </button>
                </form>
            </div>
  
            <Footer />
        </div>
    )
  }
  