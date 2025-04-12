import { useEffect } from 'react';

function Navbar() {
useEffect(() => {
    const navbar = document.getElementById('navbar');
    const navList = navbar?.querySelector('ul');

    const handleScroll = () => {
    if (!navList) return;
    if (window.scrollY > 10) {
        navList.classList.remove('bg-[#851010]');
        navList.classList.add('bg-white/10', 'backdrop-blur-md', 'shadow-md');
    } else {
        navList.classList.add('bg-[#851010]');
        navList.classList.remove('bg-white/10', 'backdrop-blur-md', 'shadow-md');
    }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
}, 
[]);

return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-[0.5s]">
    <div className="flex justify-center">
        <ul className="flex space-x-8 bg-[#851010] rounded-3xl w-[525px] h-16 items-center justify-center text-white font-bold">
        <li>
            <a href="#home" className="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#a01818] hover:scale-105 active-link">
            About
            </a>
        </li>
        <li>
            <a href="#work" className="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#a01818] hover:scale-105 active-link">
            Work
            </a>
        </li>
        <li>
            <a href="#tools" className="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#a01818] hover:scale-105 active-link">
            Tools
            </a>
        </li>
        <li>
            <a href="#contact" className="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#a01818] hover:scale-105 active-link">
            Say Hello
            </a>
        </li>
        </ul>
    </div>
    </nav>
);
}

export default Navbar;
