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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* Early Access Badge - Moved inside left column */}
              <div className="mb-12 flex lg:justify-start justify-center">
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

              <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight text-gray-900">
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
                <button className="group px-8 py-4 text-[15px] font-medium rounded-full text border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 w-full sm:w-auto inline-flex items-center justify-center">
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
                src="/podcast-setup.jpg" // Using a new image from Unsplash
                alt="Modern Podcast Studio Setup"
                fill
                className="object-cover rounded-3xl p-4"
                priority
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/5"></div>
            </div>
          </div>

        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                professional podcasts
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features that help you transform your content into engaging podcasts, without the complexity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-3xl transform transition-transform group-hover:-translate-y-2 duration-300"></div>
                <div className="relative p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Features Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-gray-600">
                New features added regularly
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "AI Voice Generation",
    description: "Create natural-sounding voices with our advanced AI technology. Perfect for narration and dialogue.",
    icon: ({ className }: { className: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: "Smart Audio Editing",
    description: "Edit your podcasts with ease using our intuitive tools. Remove noise, add effects, and enhance quality.",
    icon: ({ className }: { className: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Content Analysis",
    description: "Get insights into your podcast performance with detailed analytics and audience engagement metrics.",
    icon: ({ className }: { className: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Automated Transcription",
    description: "Convert your audio to text automatically with high accuracy. Perfect for show notes and SEO.",
    icon: ({ className }: { className: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Collaboration Tools",
    description: "Work seamlessly with your team. Share projects, leave comments, and manage permissions.",
    icon: ({ className }: { className: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "One-Click Publishing",
    description: "Publish your podcasts to all major platforms with a single click. Reach your audience everywhere.",
    icon: ({ className }: { className: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  }
];
