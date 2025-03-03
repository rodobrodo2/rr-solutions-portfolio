import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "JavaScript", "Tailwind CSS", "TypeScript"];
    const backendSkills = ["Node.js", "MongoDB", "RESTful APIs", "GraphQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                        <p className="text-gray-300 mb-6">
                            Appassionato di tecnologie web, sono sempre alla ricerca di soluzioni innovative per elevare l'esperienza utente e ottimizzare le prestazioni. Mi concentro sull'integrazione di design intuitivo, interazioni fluide e tecnologie all'avanguardia per creare applicazioni veloci, responsive e coinvolgenti.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend (learning)</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> Diploma in Sviluppo Web: </strong>  Mia Tech Academy
                                    [2024 - 2025]
                                </li>
                                <li>
                                 What i leared: Struttura dati, Sviluppo Web...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <h4 className="font-semibold"> Junior Frontend Web developer at ABC Corp [2025 - Present]</h4>
                                <p> Sviluppato e mantenuto interfacce utente responsive utilizzando HTML, CSS, JavaScript e framework moderni come React con Vite e Tailwind CSS. Collaborato con il team di sviluppo per integrare API e migliorare l’esperienza utente. Ottimizzato le prestazioni del frontend e garantito la compatibilità cross-browser.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};