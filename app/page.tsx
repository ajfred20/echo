import Image from "next/image";
import { ArrowRight, BarChart3, Sparkles, Link2, Mic2, Languages, AudioWaveformIcon, Zap, BarChart2, HeadphonesIcon, Palette, Shield, Link as LinkIcon, Check, Instagram, Twitter, AudioWaveform, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { navigation, stats } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-2xl z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <AudioWaveformIcon className="w-6 h-6 text-indigo-600" />
              <span className="font-display font-bold text-xl text-black">echo</span>
            </Link>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/features" className="nav-link">Features</Link>
              <Link href="/pricing" className="nav-link">Pricing</Link>
              <Link href="/resources" className="nav-link">Resources</Link>
              <Link href="/community" className="nav-link">Community</Link>
              
              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="nav-link flex items-center gap-1">
                  Learn
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full -left-4 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link href="/academy" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Podcast Academy</Link>
                  <Link href="/guides" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Creator Guides</Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Blog</Link>
                  <Link href="/showcase" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Showcase</Link>
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="nav-link">
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="btn-primary"
              >
                Start creating
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm text-indigo-600">AI-Powered Podcast Creation</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-8 max-w-4xl tracking-tight">
              Create Professional Podcasts in Minutes with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Transform your ideas into engaging podcasts effortlessly. Our AI technology helps solo creators write scripts, 
              generate natural voices, and produce studio-quality episodes without the complexity.
            </p>

            <Link 
              href="/signup"
              className="btn-primary px-8 py-4 text-lg rounded-full"
            >
              Create your first podcast
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>

            {/* Product Preview */}
            <div className="relative w-full max-w-5xl mx-auto mb-20 mt-16">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-indigo-50/50 rounded-2xl -z-10"></div>
              
              {/* Main Preview Container */}
              <div className="relative rounded-xl overflow-hidden border border-gray-200/50 shadow-2xl">
            <Image
                  src="/assets/q&a.jpg"
                  alt="Podcast Studio Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Stats with slightly modified styling for better contrast */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat) => (
                <div key={stat.name} className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Plug In. Power Up.
              <span className="block">Dominate.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              Get instant updates, automate your workflows, and run your podcast like a 
              well-oiled machine—all without leaving the platforms you already love.
            </p>

            {/* Platform Icons */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Image
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                alt="Spotify"
                width={160}
                height={48}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/assets/pocket-casts-logo.svg"
                alt="Pocket Casts"
                width={160}
                height={48}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://www.apple.com/v/apple-podcasts/c/images/overview/hero_icon__c135x5gz14mu_large.png"
                alt="Apple Podcasts"
                width={160}
                height={48}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/assets/soundcloud-logo.svg"
                alt="SoundCloud"
                width={120}
                height={32}
                className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Background Pattern */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/0 rounded-3xl"></div>
              <div className="grid grid-cols-5 gap-4 p-8 rounded-3xl bg-gray-50/30 border border-gray-100">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl bg-white shadow-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Analytics Feature */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-gray-800/50 group-hover:from-indigo-500/20 transition-all duration-300"></div>
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-12 h-12 mb-8 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                </div>
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">Get advanced analytics</h3>
                <p className="text-gray-400">Track your performance with detailed analytics and optimize to get better results.</p>
              </div>
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* Content Ideation Feature */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-gray-800/50 group-hover:from-indigo-500/20 transition-all duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 mb-8 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Content ideation</h3>
                <p className="text-gray-400">Generate ideas for your content with our AI-powered tools to create engaging posts in seconds.</p>
              </div>
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* Seamless Integration Feature */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-gray-800/50 group-hover:from-indigo-500/20 transition-all duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 mb-8 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Seamless integrations</h3>
                <p className="text-gray-400">Connect your favorite tools and platforms to streamline your workflow and save time.</p>
              </div>
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* AI Voice Generation */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0">
                
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-gray-800/50 group-hover:from-indigo-500/20 transition-all duration-300"></div>
              </div>
              <div className="relative p-8">
                <div className="w-12 h-12 mb-8 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <Mic2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Voice Generation</h3>
                <p className="text-gray-400">Create natural-sounding voices with our advanced AI technology.</p>
              </div>
            </div>

            {/* Smart Audio Editing */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0">
                
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-gray-800/50 group-hover:from-indigo-500/20 transition-all duration-300"></div>
              </div>
              <div className="relative p-8">
                <div className="w-12 h-12 mb-8 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <AudioWaveformIcon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Audio Editing</h3>
                <p className="text-gray-400">Edit your podcasts with ease using our intuitive AI-powered tools.</p>
              </div>
            </div>

            {/* Multi-Language Support */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-gray-800/50 group-hover:from-indigo-500/20 transition-all duration-300"></div>
              </div>
              <div className="relative p-8">
                <div className="w-12 h-12 mb-8 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Multi-Language Support</h3>
                <p className="text-gray-400">Break language barriers with instant translation and narration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      

      {/* Perks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
              Perks
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Discover the benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the powerful features and advantages that Echo offers to help you create 
              professional podcasts effortlessly
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <perk.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Loved by podcast creators worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of creators across 5 continents who use Echo to transform their ideas 
              into professional podcasts with AI-powered tools.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/discord" className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors">
                Join Discord
              </Link>
              <Link href="/twitter" className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors">
                Join Twitter Community
              </Link>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* First Column */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl h-[480px]">
                <Image
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonials[0].quote}"
                    </p>
                    <div className="text-white font-semibold">{testimonials[0].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[0].position}</div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl h-[400px]">
                <Image
                  src={testimonials[3].image}
                  alt={testimonials[3].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonials[3].quote}"
                    </p>
                    <div className="text-white font-semibold">{testimonials[3].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[3].position}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-6 md:mt-12">
              <div className="relative overflow-hidden rounded-3xl h-[400px]">
                <Image
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonials[1].quote}"
                    </p>
                    <div className="text-white font-semibold">{testimonials[1].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[1].position}</div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl h-[480px]">
          <Image
                  src={testimonials[4].image}
                  alt={testimonials[4].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonials[4].quote}"
                    </p>
                    <div className="text-white font-semibold">{testimonials[4].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[4].position}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl h-[480px]">
          <Image
                  src={testimonials[2].image}
                  alt={testimonials[2].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonials[2].quote}"
                    </p>
                    <div className="text-white font-semibold">{testimonials[2].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[2].position}</div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl h-[400px]">
          <Image
                  src={testimonials[5].image}
                  alt={testimonials[5].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8">
                    <p className="text-white mb-4 text-lg leading-relaxed">
                      "{testimonials[5].quote}"
                    </p>
                    <div className="text-white font-semibold">{testimonials[5].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[5].position}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              We believe podcast creation should be seamless, intuitive, and lightning fast
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-900 leading-none">
                and we're here to make that happen.
              </span>
            </h2>
            
            <div className="mt-8 text-xl sm:text-2xl text-gray-600 space-y-6">
              <p>
                Driven by innovation, we integrate AI into the tools you already love, 
                making your podcast creation easier and your creative goals more attainable.
              </p>
              <p className="text-gray-500">
                We don't just adapt to change; we create it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
              Pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Choose the perfect plan for your podcast
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start for free, upgrade as you grow. All plans include a 14-day trial.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Tier */}
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-indigo-100 transition-all hover:shadow-xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
                <p className="text-gray-600 mb-6">Perfect for trying out Echo</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  2 episodes per month
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Basic AI voice generation
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Standard voice options
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Community support
                </li>
              </ul>
              <Link 
                href="/signup" 
                className="block w-full py-3 px-6 rounded-lg bg-white border border-gray-200 text-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Starter Plan */}
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-indigo-100 transition-all hover:shadow-xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">For casual creators</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">$15</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">or $150/year (save 17%)</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  10 episodes per month
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Basic emotion adjustment
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Content repurposing tools
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Email support
                </li>
              </ul>
              <Link 
                href="/signup" 
                className="block w-full py-3 px-6 rounded-lg bg-indigo-600 text-center text-white hover:bg-indigo-700 transition-colors"
              >
                Start free trial
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-white rounded-2xl border border-indigo-100 p-8 hover:shadow-xl transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 mb-6">For serious creators</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">$30</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">or $300/year (save 17%)</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Unlimited episodes
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Premium voice cloning
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Multi-language support
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Advanced SEO tools
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Priority support
                </li>
              </ul>
              <Link 
                href="/signup" 
                className="block w-full py-3 px-6 rounded-lg bg-indigo-600 text-center text-white hover:bg-indigo-700 transition-colors"
              >
                Start free trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-indigo-100 transition-all hover:shadow-xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For organizations</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Starting at $100/month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  All Pro features
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  White-label solution
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  API access
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-indigo-500" />
                  Dedicated support
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="block w-full py-3 px-6 rounded-lg bg-white border border-gray-200 text-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Contact sales
              </Link>
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need more? Add extra features
            </h3>
            <p className="text-gray-600 mb-8">
              Customize your plan with our pay-as-you-go add-ons
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                  <p className="text-indigo-600 font-medium">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-500/10 blur-2xl"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-indigo-500/10 blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/20">
              Get Started
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Step into a new era of productivity and innovation
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-12 max-w-2xl">
              Join thousands of creators who are already transforming their ideas into professional podcasts with Echo's AI-powered platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white text-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Get started for free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-800 text-white text-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Footer Top */}
          <div className="mb-16">
          <Link href="/" className="flex items-center gap-1">
              <AudioWaveformIcon className="w-6 h-6 text-indigo-600" />
              <span className="font-display font-bold text-xl text-black">echo</span>
            </Link>
            <p className="mt-4 text-sm max-w-md">
              Amplify your voice with the power of AI.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Start for free
            </Link>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-t border-gray-800">
            {/* Product */}
            <div>
              <h3 className="text-black font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/home" className="text-sm hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/features" className="text-sm hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/download" className="text-sm hover:text-white transition-colors">Download</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-black font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/help" className="text-sm hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/community" className="text-sm hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/guides" className="text-sm hover:text-white transition-colors">Guides</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-black font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/cookies" className="text-sm hover:text-white transition-colors">Cookies</Link></li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-black font-semibold mb-3">Developers</h3>
              <ul className="space-y-2">
                <li><Link href="/api-docs" className="text-sm hover:text-white transition-colors">API Docs</Link></li>
                <li><Link href="/sdks" className="text-sm hover:text-white transition-colors">SDKs</Link></li>
                <li><Link href="/tools" className="text-sm hover:text-white transition-colors">Tools</Link></li>
                <li><Link href="/opensource" className="text-sm hover:text-white transition-colors">Open Source</Link></li>
                <li><Link href="/changelog" className="text-sm hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © {new Date().getFullYear()} Echo. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://instagram.com/echo" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com/echo" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://discord.gg/echo" className="hover:text-white transition-colors">
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add this perks array after your existing arrays
const perks = [
  {
    title: "Fast and Efficient",
    description: "Experience quick and seamless content creation with our optimized AI tools.",
    icon: Zap
  },
  {
    title: "Insightful Analytics",
    description: "Gain valuable insights and analytics to enhance your podcast strategy.",
    icon: BarChart2
  },
  {
    title: "24/7 Support",
    description: "Our team is available around the clock to assist with any issues or questions.",
    icon: HeadphonesIcon
  },
  {
    title: "Customizable Solutions",
    description: "Tailor the tools and features to fit your unique podcasting needs.",
    icon: Palette
  },
  {
    title: "Secure and Reliable",
    description: "Trust our platform to keep your data safe and ensure consistent performance.",
    icon: Shield
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing podcast platforms and tools.",
    icon: LinkIcon
  }
];

// Add this testimonials array after your existing arrays
const testimonials = [
  {
    quote: "Echo has transformed how I create podcasts. The AI voice generation and content suggestions have streamlined my workflow, resulting in more professional episodes in half the time.",
    name: "Sarah Chen",
    position: "Host of 'Tech Trends Weekly' Podcast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "The AI script writing feature is incredible. It helps me structure my thoughts and create engaging narratives that keep listeners hooked. Echo has become an essential part of my podcasting toolkit.",
    name: "Marcus Thompson", 
    position: "Creator of 'Startup Stories' Series",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "As a non-native English speaker, Echo's multi-language support and accent customization have been game-changing. I can now reach a global audience with confidence.",
    name: "Isabella Rodriguez",
    position: "International Lifestyle Content Creator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "The audio enhancement tools are phenomenal. Echo automatically removes background noise and enhances voice quality, making my podcasts sound like they were recorded in a professional studio.",
    name: "David Kim",
    position: "Producer of 'Music Industry Insider'",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "Echo's content repurposing feature is brilliant. It automatically creates social media snippets and blog posts from my podcast episodes, saving me hours of work each week.",
    name: "Emma Watson",
    position: "Digital Content Strategist at Spotify",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "The analytics insights have helped me understand my audience better and grow my listener base. Echo's AI suggestions for topic optimization have been spot-on.",
    name: "Michael Foster",
    position: "Host of 'Business Growth Daily' Podcast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop"
  }
];

const addOns = [
  {
    name: "Extra Episodes",
    description: "Additional episodes beyond your monthly limit",
    price: "From $2/episode"
  },
  {
    name: "Voice Packages",
    description: "Premium voice options and custom voice cloning",
    price: "From $10/voice"
  },
  {
    name: "Interactive Elements",
    description: "Polls, Q&A, and interactive segments",
    price: "From $5/element"
  },
  {
    name: "Analytics Plus",
    description: "Advanced analytics and audience insights",
    price: "From $15/month"
  }
];
