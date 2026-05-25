export default function Contact() {
    return (
        <section id="contact" className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h2>
            <p className="text-gray-600 mb-6">Feel free to reach out!</p>
            <div className="flex gap-4 flex-wrap">
                <a href="mailto:your.email@example.com" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Email</a>
                <a href="https://github.com/Pptdrum" className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900">GitHub</a>
                <a href="https://linkedin.com/in/yourprofile" className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500">LinkedIn</a>
            </div>
        </section>
    )
}