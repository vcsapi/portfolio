import Image from "next/image";

function Terminal() {
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
                    className="bg-green-950 text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer">
                    <span className="text-green-400">$</span>home
                </button>
                <button
                    className="bg-black text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer">
                    <span className="text-green-400">$</span>about
                </button>
                <button
                    className="bg-black text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer">
                    <span className="text-green-400">$</span>blog
                </button>
                <button
                    className="bg-black text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer">
                    <span className="text-green-400">$</span>portfolio
                </button>
                <button
                    className="bg-black text-sm text-white pt-3.5 pr-2.5 pb-3.5 pl-2.5 rounded-xs flex-1 cursor-pointer">
                    <span className="text-green-400">$</span>contact
                </button>
            </nav>
            <h4 className="mt-6 text-white text-sm"><span className="text-green-400">user@portfolio~$</span> home<span
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
            <div className="mt-7 h-auto wind bg-black border border-blue-900 rounded-lg p-4">
                <h4 className="text-blue-400 text-sm">Fun Fact:</h4>
                <h4 className="text-white text-sm mt-2">I can write different words with both hands at the same time.</h4>
            </div>
        </div>
    );
}

export default function Home() {
  return (
      <div className="app">
          <Terminal/>
          <AboutDiv/>
          <Footer/>
      </div>
  );
}
