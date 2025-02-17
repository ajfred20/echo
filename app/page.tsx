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
          {/* Early Access Badge */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex items-center">
              <div className="absolute inset-0 bg-indigo-50 rounded-full blur-xl opacity-50"></div>
              <span className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-800 text-sm font-medium border border-indigo-100/30 shadow-sm">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="absolute inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                <span className="ml-4">Early Access Available Soon 🚀</span>
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
                Podcast Creation
                <span className="block mt-2 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
                  just became much easier
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Transform your content into engaging podcasts in minutes. Professional quality, zero complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center">
                <button className="group px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-full transition-all hover:shadow-xl hover:shadow-gray-200/30 hover:-translate-y-0.5 w-full sm:w-auto inline-flex items-center justify-center">
                  Start Creating Free
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="group px-8 py-4 text-[15px] font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 w-full sm:w-auto inline-flex items-center justify-center">
                  Watch Demo
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:h-[600px] h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-3xl"></div>
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl"></div>
              <Image
                src="/podcast-studio.jpg" // You can use: https://unsplash.com/photos/YuRx3Vw2-QE
                alt="Modern Podcast Studio Setup"
                fill
                className="object-cover rounded-3xl p-4"
                priority
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/5"></div>
            </div>
          </div>

          {/* Wave Animation */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 mt-20">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white to-transparent z-10" />
            <Image
              src="/wave.png"
              alt="Audio Wave"
              width={2000}
              height={300}
              className="w-full opacity-40"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white to-transparent z-10" />
          </div>
        </div>
      </main>
    </div>
  );
}
