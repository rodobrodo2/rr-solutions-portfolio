import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-2"> Habbit</h3>
                            <p className="text-gray-400 mb-4">
                                - Habbit è una piattaforma immobiliare che semplifica la ricerca di alloggi per studenti e favorisce la riqualificazione urbana. Gli studenti possono cercare case disponibili e contattare direttamente i proprietari, mentre proprietari e investitori possono pubblicare annunci di affitto o avviare progetti di ristrutturazione per convertire edifici in studentati moderni.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Redux", "TailwindCss", "Node.js", "MongoDB", "Axios"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://www.linkedin.com/posts/redi-rroshi-b3a09b30a_sono-entusiasta-di-condividere-il-mio-primo-ugcPost-7300500543196581888-09jm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6tyZ4B8w7sDEV5JXq1h5M0S2P4t4ycSH0" className="text-blue-400 hover:text-blue-300 transition-colors m-4"> View Project → </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-2"> Appy Landing </h3>
                            <p className="text-gray-400 mb-4">
                                - Appy Landing è una piattaforma demo realizzata con HTML, CSS e JavaScript. Presenta un design pulito e responsive, con una struttura intuitiva e animazioni leggere per un'esperienza utente fluida. Ideale per showcase di landing page moderne.
                                (Realizzata per scopi didattici)
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://preview.cruip.com/appy/" className="text-blue-400 hover:text-blue-300 transition-colors m-4"> View Project → </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-2"> Piccoli progetti a scopo didattico </h3>
                            <p className="text-gray-400 mb-4">
                                - Durante i miei studi ho completato dei mini progetti man mano che studiavo come diventare uno sviluppatore web. Tra questi, una pagina per quiz interattivi, una pagina meteorologica che integra un'API per visualizzare i dati meteo in tempo reale e una To-Do List per la gestione delle attività, il tutto sviluppato con JavaScript, CSS e HTML.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://github.com/Rodobrodo2/portfolio" className="text-blue-400 hover:text-blue-300 transition-colors m-4"> View Project → </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
