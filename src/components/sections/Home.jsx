import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Redi
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                        Web Developer focused on building modern, responsive and accessible web applications.
                        Hands-on experience with Angular, React and full-stack development —
                        continuously expanding my skills across frontend and backend.
                    </p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <a
                            href="#projects"
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/10"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a
                            href="https://www.linkedin.com/in/redi-rroshi-b3a09b30a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            href="https://github.com/Rodobrodo2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};