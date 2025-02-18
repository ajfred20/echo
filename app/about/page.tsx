import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Lightbulb, Target, Zap } from "lucide-react";

export default function About() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Making podcast creation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                accessible to everyone
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to democratize podcast creation through AI innovation, making it easier for creators to share their stories with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all group-hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 mb-6">
                    <value.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-px h-full bg-indigo-100">
                  <div className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-indigo-600"></div>
                </div>
                <div className="relative">
                  <span className="text-sm font-medium text-indigo-600 mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To empower creators with AI-driven tools that make professional podcast production accessible, 
              enabling them to focus on what matters most – sharing their stories with the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of AI technology to create tools that make podcast creation simpler and more intuitive.",
    icon: Lightbulb
  },
  {
    title: "Creator Focused",
    description: "Every feature we build starts with the creator's needs, ensuring our platform enhances their creative process.",
    icon: Heart
  },
  {
    title: "Quality Driven",
    description: "We maintain the highest standards in audio quality and user experience across all our features.",
    icon: Target
  },
  {
    title: "Future Ready",
    description: "We're constantly evolving our technology to stay ahead of the curve in digital content creation.",
    icon: Zap
  }
];

const timeline = [
  {
    date: new Date().getFullYear().toString(),
    title: "Echo Launches",
    description: "We introduced our AI-powered podcast creation platform to the world, revolutionizing how creators produce content."
  },
  {
    date: `${new Date().getFullYear()} Q2`,
    title: "Smart Audio Editing",
    description: "Launched our innovative AI-driven audio editing features, making professional editing accessible to everyone."
  },
  {
    date: `${new Date().getFullYear()} Q3`,
    title: "Multi-Language Support",
    description: "Expanded our platform to support multiple languages, breaking down barriers in global podcast creation."
  },
  {
    date: `${new Date().getFullYear()} Q4`,
    title: "Community Growth",
    description: "Reached our first milestone of 10,000 active creators using Echo to share their stories."
  }
];