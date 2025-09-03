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
            <h4 className="text-blue-400 text-sm mt-6">╔═══════════════════════════════════════════════════════════════╗</h4>
            <h4 className="text-blue-400 text-sm">║ WELCOME TO MY PORTFOLIO ║</h4>
            <h4 className="text-blue-400 text-sm">╚═══════════════════════════════════════════════════════════════╝</h4>
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

function Content() {
    return (
        <div className="mr-5 ml-5 mb-5 h-auto wind bg-black border border-green-700 rounded-lg p-6">
            <h4 className="text-blue-400 text-sm">    ██╗  ██╗███████╗██╗     ██╗      ██████╗ </h4>
            <h4 className="text-blue-400 text-sm">    ██║  ██║██╔════╝██║     ██║     ██╔═══██╗</h4>
            <h4 className="text-blue-400 text-sm">    ███████║█████╗  ██║     ██║     ██║   ██║</h4>
            <h4 className="text-blue-400 text-sm">    ██╔══██║██╔══╝  ██║     ██║     ██║   ██║</h4>
            <h4 className="text-blue-400 text-sm">    ██║  ██║███████╗███████╗███████╗╚██████╔╝</h4>
            <h4 className="text-blue-400 text-sm">    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ </h4>
        </div>
    );
}

export default function Home() {
  return (
      <div className="app">
          <Terminal/>
          <Content/>
      </div>
  );
}
