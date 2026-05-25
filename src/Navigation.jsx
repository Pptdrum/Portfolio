export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center gap-8">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
        </nav>
    )
}