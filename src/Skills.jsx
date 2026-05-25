export default function Skills() {
    return (
        <section id="skills" className="bg-white rounded-lg p-6 shadow-lg h-full">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills</h2>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-100 p-3 rounded text-center">
                    <p className="text-gray-800 font-semibold">JavaScript</p>
                </div>
                <div className="bg-blue-100 p-3 rounded text-center">
                    <p className="text-gray-800 font-semibold">React</p>
                </div>
                <div className="bg-blue-100 p-3 rounded text-center">
                    <p className="text-gray-800 font-semibold">HTML & CSS</p>
                </div>
                <div className="bg-blue-100 p-3 rounded text-center">
                    <p className="text-gray-800 font-semibold">[Your Skill]</p>
                </div>
            </div>
        </section>
    )
}