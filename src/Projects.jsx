export default function Projects() {
    return (
        <section id="projects" className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Project 1</h3>
                    <p className="text-gray-600 mb-3">Description of your first project</p>
                    <a href="https://github.com/Pptdrum/project1" className="text-blue-600 hover:text-blue-800 font-semibold">View on GitHub →</a>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Project 2</h3>
                    <p className="text-gray-600 mb-3">Description of your second project</p>
                    <a href="https://github.com/Pptdrum/project2" className="text-blue-600 hover:text-blue-800 font-semibold">View on GitHub →</a>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Project 3</h3>
                    <p className="text-gray-600 mb-3">Description of your third project</p>
                    <a href="https://github.com/Pptdrum/project3" className="text-blue-600 hover:text-blue-800 font-semibold">View on GitHub →</a>
                </div>
            </div>
        </section>
    )
}