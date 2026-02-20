import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Angular", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"];
    const backendSkills = ["Node.js", "PHP", "Laravel", "Java Spring Boot", "MongoDB", "MySQL", "REST APIs"];
    const toolsSkills = ["Git", "RxJS", "NgRx", "PrimeNG", "Flutter", "Supabase"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all mb-8">
                        <p className="text-gray-300 mb-6">
                            I'm a Web Developer based in Bologna, Italy, focused on building modern, responsive and accessible web applications
                            with strong attention to UI/UX quality. During my internship at SWD Group, I gained solid hands-on experience
                            working in a structured team environment — developing Angular applications with TypeScript, using RxJS and NgRx for
                            reactive state management, and building enterprise-grade UIs with PrimeNG. I also implemented backend features
                            using PHP, Laravel and Java Spring Boot, which pushed me toward a full-stack mindset. Outside of work, I'm
                            continuously building — from a MERN-stack e-commerce platform to a mobile job-matching app with Flutter and Supabase.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold mb-3 text-blue-400">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold mb-3 text-blue-400">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg font-bold mb-3 text-blue-400">Tools & Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {toolsSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <p className="font-semibold text-white">Web Development Program</p>
                                    <p className="text-blue-400 text-sm">Mia Academy — Italy</p>
                                    <p className="text-sm mt-1">Intensive training in modern web development: JavaScript, React, TypeScript, HTML, CSS, Tailwind. Backend fundamentals including PHP and MongoDB. Final project: a real-world student housing platform.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">High School Diploma in Languages</p>
                                    <p className="text-blue-400 text-sm">Liceo Linguistico Terenzio Mamiani — Pesaro</p>
                                    <p className="text-sm mt-1">English C1 · French B1 · German B1</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-2 text-gray-300">
                                <p className="font-semibold text-white">Web Developer Intern</p>
                                <p className="text-blue-400 text-sm">SWD Group — Italy</p>
                                <p className="text-xs text-gray-500 mb-2">Curricular (2 months) + Extracurricular (6 months)</p>
                                <ul className="text-sm space-y-1 list-disc list-inside">
                                    <li>Developed and maintained web applications and internal management systems</li>
                                    <li>Built responsive UIs with Angular, TypeScript, HTML5, CSS and PrimeNG</li>
                                    <li>Used RxJS and NgRx for reactive state management</li>
                                    <li>Implemented backend features with PHP, Laravel and Java Spring Boot</li>
                                    <li>Collaborated in Git-based team workflows on real production systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};