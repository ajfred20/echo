import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-2xl z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Echo Logo"
                width={32}
                height={32}
                priority
                className="hover:scale-105 transition-transform"
              />
              <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">
                echo
              </span>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center gap-14">
              <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5">Features</a>
              <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5">Solutions</a>
              <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5">Pricing</a>
              <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5">Resources</a>
            </div>

            {/* Right Side Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5">
                Sign in
              </a>
              <button className="px-5 py-2.5 bg-gray-900 text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="p-2 md:hidden text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <div className="mb-8 inline-block">
              <span className="px-4 py-2 rounded-full bg-gray-900/5 text-gray-600 text-sm font-medium">
                Launching Soon 🚀
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-[1.2]">
              Podcast Creation
              <br />
              just became much
              <br />
              much easier
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your content into engaging podcasts in minutes. Professional quality, zero complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-full transition-all hover:shadow-xl hover:shadow-gray-200/30 hover:-translate-y-0.5 w-full sm:w-auto">
                Start Creating Free
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </button>
              <button className="group px-8 py-4 text-lg font-medium rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:shadow-gray-100/50 hover:-translate-y-0.5 w-full sm:w-auto">
                Watch Demo
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Wave Animation */}
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white to-transparent z-10" />
            <Image
              src="/wave.png"
              alt="Audio Wave"
              width={2000}
              height={300}
              className="w-full opacity-60"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white to-transparent z-10" />
          </div>
        </div>
      </main>
    </div>
  );
}
