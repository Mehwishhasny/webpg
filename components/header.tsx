import Link from 'next/link';

export function Header() {
    return (
        <div className="flex flex-col sm:flex-row sticky top-0 z-50 p-6 justify-between items-center sm:w-full max-w-7xl mx-auto mt-2 shadow-lg">
            <h1 className="text-black font-bold text-xl cursor-pointer"><Link href="/"> <b>WRAFTY</b> creations</Link></h1>
        
            <ul className="flex text-black font-bold sm:text-xl sm:space-x-8 text-lg space-x-4 sm:mr-4">
                <li className="hover:text-gray-600"><Link href="/"> Home</Link></li>
                <li className="hover:text-gray-600"><Link href="/about">About</Link></li>
                <li className="hover:text-gray-600"><Link href="/portfolio">Portfolio</Link></li>
                <li className="hover:text-gray-600"><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
