import Image from "next/image";
import Link from "next/link";
import { 
  Mic2, Brain, MessageSquareMore, Languages, 
  Repeat, WavesIcon, BarChart3, FileText, 
  Users, Upload, ArrowLeft
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
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

            {/* Back to Home */}
            <Link 
              href="/"
              className="group flex items-center gap-2 px-5 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm font-medium text-gray-600">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Every feature you need to create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                professional podcasts
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              From AI-powered voice generation to seamless publishing, we've got all the tools you need to create, edit, and share your podcasts.
            </p>
          </div>
        </div>
      </header>

      {/* All Features Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
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
    </div>
  );
}

const allFeatures = [
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
  },
  {
    title: "Content Analysis",
    description: "Get insights into your podcast performance with detailed analytics and audience engagement metrics.",
    icon: BarChart3
  },
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