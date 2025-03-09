'use client';

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import { Mic2, FileText, Headphones, Music, ArrowRight } from "lucide-react";
import Link from "next/link";

const createOptions = [
  {
    title: "Text to Podcast",
    description: "Convert your written content into a natural-sounding podcast",
    icon: FileText,
    href: "/dashboard/create/text-to-podcast",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Voice Generation",
    description: "Create custom AI voices for your content",
    icon: Mic2,
    href: "/dashboard/create/voice",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Audio Enhancement",
    description: "Improve audio quality and add professional effects",
    icon: Headphones,
    href: "/dashboard/create/enhance",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Background Music",
    description: "Add music and sound effects to your podcast",
    icon: Music,
    href: "/dashboard/create/music",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }
];

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;
  if (!user) redirect('/login');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className={`ml-64 p-8`}>
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              What would you like to create today?
            </h1>
            <p className="text-gray-600">
              Choose from our AI-powered creation tools
            </p>
          </div>

          {/* Creation Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {createOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${option.bgColor}`}>
                    <option.icon className={`w-6 h-6 ${option.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {option.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <p className="text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 