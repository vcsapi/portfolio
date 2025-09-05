"use client";

import { useState, useEffect } from "react";

type SectionKey = "home" | "about" | "blog" | "portfolio" | "contact";

// API Data Types
interface BlogPost {
    id: number;
    name: string;
    description: string;
    tags: string;
    published: string;
}

interface PortfolioProject {
    id: number;
    name: string;
    description: string;
    tech: string;
    users: string;
    status: string;
    repos: string;
    type: string;
}

// API Base URL - Update this to match your Django server
const API_BASE_URL = "http://localhost:8000";

function Terminal({ activeSection, onChange }: { activeSection: SectionKey; onChange: (s: SectionKey) => void; }) {
    return (
        <div className="m-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <header className="flex flex-row items-start justify-between">
                <nav className="flex flex-row items-start gap-2">
                    <span className="bg-red-700 h-2.5 w-2.5 rounded-full"></span>
                    <span className="bg-yellow-500 h-2.5 w-2.5 rounded-full"></span>
                    <span className="bg-green-700 h-2.5 w-2.5 rounded-full"></span>
                </nav>
                <h4 className="text-green-400 text-sm">terminal@portfolio~$</h4>
                <h4 className="text-green-400 text-sm">11:07:41</h4>
            </header>
            <div className="w-full h-px bg-green-400 mt-2.5"></div>
            <h4 className="text-blue-400 text-sm mt-6">╔═════════════════════════╗</h4>
            <h4 className="text-blue-400 text-sm">║ WELCOME TO MY PORTFOLIO ║</h4>
            <h4 className="text-blue-400 text-sm">╚═════════════════════════╝</h4>
            <h4 className="text-yellow-400 text-sm mt-8">Available commands:</h4>
            <nav className="flex flex-row items-start justify-between mt-3.5 gap-2">
                <button
                    onClick={() => onChange("home")}
                    className={(activeSection === "home" ? "bg-green-950" : "bg-black") + " text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer"}>
                    <span className="text-green-400">$</span>home
                </button>
                <button
                    onClick={() => onChange("about")}
                    className={(activeSection === "about" ? "bg-green-950" : "bg-black") + " text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer"}>
                    <span className="text-green-400">$</span>about
                </button>
                <button
                    onClick={() => onChange("blog")}
                    className={(activeSection === "blog" ? "bg-green-950" : "bg-black") + " text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer"}>
                    <span className="text-green-400">$</span>blog
                </button>
                <button
                    onClick={() => onChange("portfolio")}
                    className={(activeSection === "portfolio" ? "bg-green-950" : "bg-black") + " text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer"}>
                    <span className="text-green-400">$</span>portfolio
                </button>
                <button
                    onClick={() => onChange("contact")}
                    className={(activeSection === "contact" ? "bg-green-950" : "bg-black") + " text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer"}>
                    <span className="text-green-400">$</span>contact
                </button>
            </nav>
            <h4 className="mt-6 text-white text-sm"><span className="text-green-400">user@portfolio~$</span> {activeSection}<span
                className="cursor"></span></h4>
        </div>
    );
}

function Footer() {
    return (
        <div className="flex justify-center items-center mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <h4 className="text-white text-sm"><span className="text-yellow-400">$ uptime</span> Portfolio running since 2024 • Built with React & Love • Terminal theme </h4>
        </div>
    );
}

function HomeDiv() {
    return (
        <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <h4 className="text-blue-400 text-sm mt-6">╔╗╔╗╔═══╗╔╗──╔╗──╔══╗</h4>
            <h4 className="text-blue-400 text-sm">║║║║║╔══╝║║──║║──║╔╗║</h4>
            <h4 className="text-blue-400 text-sm">║╚╝║║╚══╗║║──║║──║║║║</h4>
            <h4 className="text-blue-400 text-sm">║╔╗║║╔══╝║║──║║──║║║║</h4>
            <h4 className="text-blue-400 text-sm">║║║║║╚══╗║╚═╗║╚═╗║╚╝║</h4>
            <h4 className="text-blue-400 text-sm">╚╝╚╝╚═══╝╚══╝╚══╝╚══╝</h4>
            <h4 className="text-yellow-400 text-sm mt-10">$ whoami</h4>
            <p className="text-white text-sm mt-3.5">Imran - Fullstack developer</p>
            <h4 className="text-yellow-400 text-sm mt-7">$ whoami</h4>
            <p className="text-white text-sm mt-3.5">Welcome to my digital workspace. I love creating something new. When I'm not coding, you can find me learning new technologies or drinking coffee.</p>
            <h4 className="text-yellow-400 text-sm mt-7">$ ls skills/</h4>
            <div>
                <div className="flex flex-row items-start gap-20 mt-7">
                    <p className="text-blue-400 text-sm">JavaScript</p>
                    <p className="text-blue-400 text-sm">Git</p>
                    <p className="text-blue-400 text-sm">Django</p>
                </div>
                <div className="flex flex-row items-start gap-28 mt-5">
                    <p className="text-blue-400 text-sm">Python</p>
                    <p className="text-blue-400 text-sm">React</p>
                </div>
            </div>
            <h4 className="text-yellow-400 text-sm mt-7">$ uptime</h4>
            <p className="text-white text-sm mt-3.5">System running for: 2+ years in development</p>
            <div className="bg-black border border-green-700 rounded-lg w-full p-4 mt-7">
                <h4 className="text-yellow-400 text-sm">SYSTEM STATUS:</h4>
                <ul className="text-green-400 text-sm mt-3">
                    <li> - All systems operational</li>
                    <li> - Ready for new projects</li>
                    <li> - Coffee levels: Optimal</li>
                </ul>
            </div>
        </div>
    );
}

function AboutDiv() {
    return (
        <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <h4 className="text-yellow-400 text-sm">$ cat /home/user/about.md</h4>
            <h4 className="text-blue-400 text-sm mt-5 ml-3.5"># Personal Information</h4>
            <p className="text-white text-sm mt-3 ml-7">Name: Imran</p>
            <p className="text-white text-sm mt-1 ml-7">Location: Russia</p>
            <p className="text-white text-sm mt-1 ml-7">Experience: 2+ years</p>
            <p className="text-white text-sm mt-1 ml-7">Status: Available for hire</p>
            <h4 className="text-blue-400 text-sm mt-5 ml-3.5"># Background</h4>
            <p className="text-white text-sm mt-3 ml-7">I started my journey in a school computer science club where I learned my first programming language: C++. Then I started creating layouts in figma. That's how I came to study the web 2 years ago</p>
            <h4 className="text-blue-400 text-sm mt-5 ml-3.5"># Philosophy</h4>
            <p className="text-white text-sm mt-3 ml-7">If you can optimize it, optimize it.</p>
            <h4 className="text-blue-400 text-sm mt-5 ml-3.5"># Interests</h4>
            <p className="text-white text-sm mt-3 ml-7"> - Machine learning and AI</p>
            <p className="text-white text-sm mt-1 ml-7"> - Photography</p>
            <p className="text-white text-sm mt-1 ml-7"> - Swimming</p>
            <h4 className="text-yellow-400 text-sm mt-7">$ cat /home/user/about.md</h4>
            <p className="text-white text-sm mt-3 ml-3">File: personality</p>
            <p className="text-white text-sm mt-1 ml-3">Type: Human</p>
            <p className="text-white text-sm mt-1 ml-3">Attributes: Creative, Positive, Collaborative</p>
            <p className="text-white text-sm mt-1 ml-3">Last modified: Always evolving</p>
            <div className="mt-7 h-auto w-full bg-black border border-blue-900 rounded-lg p-4">
                <h4 className="text-blue-400 text-sm">Fun Fact:</h4>
                <h4 className="text-white text-sm mt-2">I can write different words with both hands at the same time.</h4>
            </div>
        </div>
    );
}

function ContactDiv() {
    return (
        <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <h4 className="text-yellow-400 text-sm">$ cat /home/user/contact.txt</h4>
            <h4 className="text-blue-400 text-sm mt-5 ml-3.5"># Contact Information</h4>
            <span className="flex flex-row items-start justify-between">
                <p className="text-white text-sm mt-3.5 ml-7">Email:</p>
                <p className="text-blue-400 text-sm mt-3.5 mr-6">use.vcs.api@gmail.com</p>
            </span>
            <span className="flex flex-row items-start justify-between">
                <p className="text-white text-sm mt-3.5 ml-7">Site:</p>
                <p className="text-blue-400 text-sm mt-3.5 mr-6">site.url</p>
            </span>
            <span className="flex flex-row items-start justify-between">
                <p className="text-white text-sm mt-3.5 ml-7">GitHub:</p>
                <p className="text-blue-400 text-sm mt-3.5 mr-6">github.com/vcsapi</p>
            </span>
            <span className="flex flex-row items-start justify-between">
                <p className="text-white text-sm mt-3.5 ml-7">Telegram:</p>
                <p className="text-blue-400 text-sm mt-3.5 mr-6">@logka_15</p>
            </span>
            <span className="flex flex-row items-start justify-between">
                <p className="text-white text-sm mt-3.5 ml-7">Location:</p>
                <p className="text-white text-sm mt-3.5 mr-6">Russia</p>
            </span>
            <h4 className="text-blue-400 text-sm mt-5 ml-3.5"># Contact Information</h4>
            <p className="text-green-400 text-sm mt-3 ml-3"> - Currentky accepting new projects</p>
            <p className="text-green-400 text-sm mt-3 ml-3"> - Open to freelance opportunities</p>
            <p className="text-green-400 text-sm mt-3 ml-3"> - Available for consulting</p>
            <p className="text-yellow-400 text-sm mt-3 ml-3"> - Response time: Usually within 24 hours</p>
        </div>
    );
}
function BlogDiv() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/api/app1/modela/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                setBlogPosts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <p className="text-yellow-400 text-sm ml-3">$ ls -la /home/user/blog/</p>
            <p className="text-white text-sm mt-5 ml-3">total {blogPosts.length} posts</p>
            <p className="text-white text-sm mt-2 ml-3">drwxr-xr-x 2 user user 4096 Feb 15 09:30 .</p>
            <p className="text-white text-sm mt-2 ml-3">drwxr-xr-x 5 user user 4096 Feb 15 09"30 ...</p>
            <p className="text-yellow-400 text-sm mt-5 ml-3">$ cat blog/posts.txt</p>
            <div className="bg-black border border-green-700 rounded-lg w-full p-4 mt-7">
                {loading ? (
                    <p className="text-yellow-400 text-sm">Loading blog posts...</p>
                ) : error ? (
                    <p className="text-red-400 text-sm">Error: {error}</p>
                ) : blogPosts.length === 0 ? (
                    <p className="text-white text-sm">No blog posts found.</p>
                ) : (
                    <div className="space-y-4">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="border-b border-green-800 pb-3 last:border-b-0">
                                <h4 className="text-blue-400 text-sm font-bold">{post.name}</h4>
                                <p className="text-white text-xs mt-1">{post.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {post.tags.split(',').map((tag, index) => (
                                        <span key={index} className="text-green-400 text-xs bg-green-900 px-2 py-1 rounded">
                                            #{tag.trim()}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-xs mt-2">Published: {new Date(post.published).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function PortfolioDiv() {
    const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPortfolioProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/api/app2/modelb/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch portfolio projects');
                }
                const data = await response.json();
                setPortfolioProjects(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolioProjects();
    }, []);

    return (
        <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <p className="text-yellow-400 text-sm ml-3">$ ls -la /home/user/projects/</p>
            <p className="text-white text-sm mt-5 ml-3">total {portfolioProjects.length} projects</p>
            <p className="text-white text-sm mt-2 ml-3">drwxr-xr-x 2 user user 4096 Feb 15 09:30 .</p>
            <p className="text-white text-sm mt-2 ml-3">drwxr-xr-x 5 user user 4096 Feb 15 09"30 ...</p>
            <p className="text-yellow-400 text-sm mt-5 ml-3">$ cat projects/README.md</p>
            <div className="bg-black border border-green-700 rounded-lg w-full p-4 mt-7">
                {loading ? (
                    <p className="text-yellow-400 text-sm">Loading portfolio projects...</p>
                ) : error ? (
                    <p className="text-red-400 text-sm">Error: {error}</p>
                ) : portfolioProjects.length === 0 ? (
                    <p className="text-white text-sm">No portfolio projects found.</p>
                ) : (
                    <div className="space-y-4">
                        {portfolioProjects.map((project) => (
                            <div key={project.id} className="border-b border-green-800 pb-4 last:border-b-0">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-blue-400 text-sm font-bold">{project.name}</h4>
                                    <span className={`text-xs px-2 py-1 rounded ${
                                        project.status === 'Completed' ? 'bg-green-900 text-green-400' :
                                        project.status === 'In Progress' ? 'bg-yellow-900 text-yellow-400' :
                                        'bg-gray-900 text-gray-400'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-white text-xs mt-1 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tech.split(',').map((tech, index) => (
                                        <span key={index} className="text-green-400 text-xs bg-green-900 px-2 py-1 rounded">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <div className="flex gap-4">
                                        <span className="text-gray-400">Type: <span className="text-white">{project.type}</span></span>
                                        <span className="text-gray-400">Users: <span className="text-white">{project.users}</span></span>
                                    </div>
                                    {project.repos && (
                                        <a 
                                            href={project.repos} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 underline"
                                        >
                                            View Repo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Home() {
    const [activeSection, setActiveSection] = useState<SectionKey>("home");

    return (
        <div className="app">
            <Terminal activeSection={activeSection} onChange={setActiveSection} />
            {activeSection === "home" && <HomeDiv/>}
            {activeSection === "about" && <AboutDiv/>}
            {activeSection === "contact" && <ContactDiv/>}
            {activeSection === "blog" && <BlogDiv/>}
            {activeSection === "portfolio" && <PortfolioDiv/>}
            {activeSection !== "home" && activeSection !== "about" && activeSection !== "contact" && activeSection !== "blog" && activeSection !== "portfolio" && (
                <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
                    <h4 className="text-yellow-400 text-sm">$ echo \"{activeSection} section coming soon...\"</h4>
                    <p className="text-white text-sm mt-3.5">This section is under construction.</p>
                </div>
            )}
            <Footer/>
        </div>
    );
}
