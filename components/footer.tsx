import Link from 'next/link';

export function Footer() {
    return (
        <div className="flex flex-col p-4 text-black w-full max-w-7xl mx-auto shadow-lg bg-gray-300 mb-10">
            
            <div className="flex flex-col sm:flex-row justify-between">
            
                <div className="flex flex-col items-center m-2">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115818.02257638222!2d67.0564352!3d24.887296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1728542836012!5m2!1sen!2s" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="mt-4">
                        <a
                            href="https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh,+Pakistan/@25.1929837,66.4959539,9z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline font-bold sm:text-lg text-sm"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>

            
                <div className="flex flex-col sm:flex-row sm:justify-start justify-center sm:space-x-12 space-x-0 sm:space-y-0 space-y-4 mt-4 sm:mt-0">
                    <div className="flex flex-col sm:space-y-4">
                        <h2><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></h2>
                        <h2><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></h2>
                        <h2><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></h2>
                        <h2><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></h2>
                        <h2><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></h2>
                    </div>

                    <div className="flex flex-col sm:space-y-6 mt-4 sm:mt-0">
                        <h2><a href="https://your-faq-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">FAQs</a></h2>
                        <h2><a href="https://your-blogs-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Blogs</a></h2>
                        <h2><a href="https://your-team-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Our Team</a></h2>
                        <h2><a href="https://your-gallery-url.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Gallery</a></h2>
                    </div>
                </div>
            </div>

        
            <div className="flex justify-center mt-3">
                <p className="text-sm">© 2024 Wrafty Creations. All rights reserved.</p>
            </div>
        </div>
    );
}
