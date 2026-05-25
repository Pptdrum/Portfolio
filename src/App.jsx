import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function App() {
    return (
        <div>
            <Navigation />
            <div className="bg-gray-900 min-h-screen p-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero - Full width */}
                    <div className="mb-8">
                        <Hero />
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* About - Left side, spans 1 column */}
                        <div className="md:col-span-1 lg:col-span-1">
                            <About />
                        </div>

                        {/* Skills - Right side, spans 2 columns on large screens */}
                        <div className="md:col-span-1 lg:col-span-2">
                            <Skills />
                        </div>

                        {/* Projects - Full width bottom */}
                        <div className="md:col-span-2 lg:col-span-3">
                            <Projects />
                        </div>

                        {/* Contact - Full width */}
                        <div className="md:col-span-2 lg:col-span-3">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}