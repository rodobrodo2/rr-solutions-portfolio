import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    const projects = [
        {
            title: "Student Housing Platform",
            description: "A platform to help students find affordable housing. Features accessible and responsive UI with clear user flows, listing and search functionality to improve discovery and usability.",
            tags: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
            link: "https://www.linkedin.com/posts/redi-rroshi-b3a09b30a_sono-entusiasta-di-condividere-il-mio-primo-ugcPost-7300500543196581888-09jm",
            linkLabel: "View on LinkedIn →",
            badge: null,
        },
        {
            title: "Workey",
            description: "A mobile-first job matching application connecting workers and employers for fast job opportunities. Features clean UI focused on speed, authentication flow and scalable data handling with Supabase as backend.",
            tags: ["Flutter", "Dart", "Supabase"],
            link: "https://github.com/rodobrodo2/workpop",
            linkLabel: "View on GitHub →",
            badge: "In Progress",
        },
        {
            title: "Pciante",
            description: "A full-stack e-commerce platform for an online jewellery shop built with the MERN stack. Features product listings, cart management, user authentication and a clean, responsive shopping experience.",
            tags: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
            link: "https://github.com/rodobrodo2/onlineShop-picante-",
            linkLabel: "View on GitHub →",
            badge: null,
        },
        {
            title: "Appy Landing",
            description: "A demo landing page built with HTML, CSS and JavaScript. Clean, responsive design with smooth animations and intuitive structure — built for educational purposes.",
            tags: ["JavaScript", "HTML", "CSS"],
            link: "https://preview.cruip.com/appy/",
            linkLabel: "View Demo →",
            badge: null,
        },
        {
            title: "Mini Projects",
            description: "A collection of small projects built while learning web development: an interactive quiz page, a weather app integrating a real-time API, and a task management To-Do List.",
            tags: ["JavaScript", "HTML", "CSS"],
            link: "https://github.com/Rodobrodo2/portfolio",
            linkLabel: "View on GitHub →",
            badge: null,
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, key) => (
                            <div
                                key={key}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        {project.badge && (
                                            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">
                                                {project.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tech, i) => (
                                            <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.link && (
                                    <div className="flex justify-end">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                                        >
                                            {project.linkLabel}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};