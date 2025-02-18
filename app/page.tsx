import Image from "next/image";
import { 
  ArrowRight, 
  Play, 
  Mic2, 
  WavesIcon, 
  BarChart3, 
  FileText, 
  Users, 
  Upload,
  DollarSign,
  Zap,
  Users2,
  BadgeCheck,
  Brain,
  MessageSquareMore,
  Languages,
  Repeat,
  Sparkles,
  Share2
} from "lucide-react";
import Link from "next/link";

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
              <Link 
                href="/features" 
                className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5"
              >
                Features
              </Link>
              <Link 
                href="/about" 
                className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all hover:-translate-y-0.5"
              >
                About
              </Link>
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
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 text-[15px] font-medium rounded-full text-gray-900 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 w-full sm:w-auto inline-flex items-center justify-center">
                  Watch Demo
                  <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:h-[600px] h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-3xl"></div>
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc"
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6 group-hover:-translate-y-1 transition-transform">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                {" "}Echo Works
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Transform your content into engaging podcasts in four simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all group-hover:-translate-y-1 text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6 mx-auto group-hover:-translate-y-1 transition-transform">
                      <step.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-4">
                      Step {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-12 -translate-y-1/2">
                      <svg className="w-12 h-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-gray-200/30 hover:-translate-y-0.5">
                Start Creating Now
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="text-sm font-medium text-indigo-600">Intuitive Interface</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful dashboard for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                complete control
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to create, manage, and analyze your podcasts in one place
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 to-purple-50/50 rounded-3xl -mx-6 -my-6"></div>

            {/* Dashboard Frame */}
            <div className="relative bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              {/* Dashboard Header */}
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-600">Echo Dashboard</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-48 bg-gray-50 rounded-md"></div>
                  <div className="h-8 w-8 bg-gray-50 rounded-md"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid lg:grid-cols-4 gap-6 p-8">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-10 bg-gray-50 rounded-lg w-full"></div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-xl border border-gray-100 p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                            <stat.icon className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Callouts */}
                  {callouts.map((callout, index) => (
                    <div 
                      key={index}
                      className="absolute"
                      style={callout.style}
                    >
                      <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
                        <div className="font-medium text-gray-900 mb-1">{callout.title}</div>
                        <div className="text-sm text-gray-600">{callout.description}</div>
                      </div>
                      <div className="w-2 h-2 bg-white rounded-full absolute -left-1 top-1/2 -translate-y-1/2 shadow-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-medium text-indigo-800">Revenue Generation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Turn your content into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                a thriving business
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Powerful monetization tools that help you generate revenue while focusing on what matters most - creating great content.
            </p>
          </div>

          {/* Monetization Features */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Smart Sponsorship Matching */}
            <div className="relative bg-white rounded-3xl p-8 group transition-all">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-50/50 to-white ring-1 ring-inset ring-gray-100 group-hover:ring-gray-200 transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6 group-hover:-translate-y-1 transition-transform">
                  <DollarSign className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Smart Sponsorship Matching</h3>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">Automated</span>
                </div>
                <p className="text-gray-600 mb-6">AI-powered system that connects your podcast with relevant sponsors based on your content and audience demographics.</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <span>Brand Safety</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <span>Real-time Matching</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Ad Placement */}
            <div className="relative bg-white rounded-3xl p-8 group transition-all">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-50/50 to-white ring-1 ring-inset ring-gray-100 group-hover:ring-gray-200 transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6 group-hover:-translate-y-1 transition-transform">
                  <Zap className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Dynamic Ad Placement</h3>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">Smart</span>
                </div>
                <p className="text-gray-600 mb-6">Intelligent ad insertion that finds the perfect moments in your content for seamless sponsor messages.</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <span>Natural Flow</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <span>High Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fan Engagement */}
            <div className="relative bg-white rounded-3xl p-8 group transition-all">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-50/50 to-white ring-1 ring-inset ring-gray-100 group-hover:ring-gray-200 transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6 group-hover:-translate-y-1 transition-transform">
                  <Users2 className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Fan Engagement</h3>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">Tokenized</span>
                </div>
                <p className="text-gray-600 mb-6">Create exclusive content and rewards for your most engaged listeners through tokenized membership tiers.</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <span>Community Building</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <span>Recurring Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Stats */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">45%</div>
              <p className="text-gray-600">Average Revenue Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <p className="text-gray-600">Active Sponsors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">$2.5M+</div>
              <p className="text-gray-600">Creator Earnings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// First, let's create a separate array for additional features
const additionalFeatures = [
  {
    title: "Automated Transcription",
    description: "Convert your audio to text automatically with high accuracy. Perfect for show notes and SEO.",
    icon: FileText
  },
  {
    title: "Collaboration Tools",
    description: "Work seamlessly with your team. Share projects, leave comments, and manage permissions.",
    icon: Users
  },
  {
    title: "One-Click Publishing",
    description: "Publish your podcasts to all major platforms with a single click. Reach your audience everywhere.",
    icon: Upload
  }
];

// Keep only 6 main features in the features array
const features = [
  {
    title: "AI Voice Generation",
    description: "Create natural-sounding voices with our advanced AI technology. Perfect for narration and dialogue.",
    icon: Mic2
  },
  {
    title: "AI-Generated Podcasts",
    description: "Emotionally intelligent content generation with auto-adjusted tone and emphasis for natural-sounding delivery.",
    icon: Brain,
    badge: "New"
  },
  {
    title: "Interactive Engagement",
    description: "Foster audience connection with real-time Q&A, polls, and dynamic feedback systems during live sessions.",
    icon: MessageSquareMore,
    badge: "Beta"
  },
  {
    title: "Multi-Language Support",
    description: "Break language barriers with instant translation and narration in native-level fluency across languages.",
    icon: Languages
  },
  {
    title: "Content Repurposing",
    description: "Automatically transform your podcasts into videos, social media snippets, and other engaging formats.",
    icon: Repeat
  },
  {
    title: "Smart Audio Editing",
    description: "Edit your podcasts with ease using our intuitive tools. Remove noise, add effects, and enhance quality.",
    icon: WavesIcon
  }
];

// Add this steps array after your features array
const steps = [
  {
    title: "Input Your Content",
    description: "Upload your blog post, script, or any text content. Our AI understands context and tone.",
    icon: FileText
  },
  {
    title: "AI Processing",
    description: "Our AI analyzes your content, optimizes it for audio, and adds engagement elements.",
    icon: Sparkles
  },
  {
    title: "Voice Generation",
    description: "Choose from natural-sounding voices or use your own. Add music and effects.",
    icon: Mic2
  },
  {
    title: "Publish & Share",
    description: "Distribute your podcast across all major platforms with one click.",
    icon: Share2
  }
];

// Add these arrays for the dashboard stats and callouts
const stats = [
  {
    label: "Total Listens",
    value: "24.5K",
    icon: BarChart3
  },
  {
    label: "Avg. Engagement",
    value: "87%",
    icon: Users2
  },
  {
    label: "Episodes",
    value: "156",
    icon: Mic2
  }
];

const callouts = [
  {
    title: "One-Click Repurposing",
    description: "Automatically transform your podcast into social media snippets, blog posts, and more.",
    style: { top: "20%", right: "-320px" }
  },
  {
    title: "Real-time Analytics",
    description: "Track listener engagement, demographics, and content performance in real-time.",
    style: { top: "50%", right: "-320px" }
  },
  {
    title: "AI-Powered Insights",
    description: "Get smart recommendations to improve your content and grow your audience.",
    style: { top: "80%", right: "-320px" }
  }
];
