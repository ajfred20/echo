'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { ArrowRight, AudioWaveform, ChevronDown, Menu } from "lucide-react";

export default function Navigation() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-2xl z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <AudioWaveform className="w-6 h-6 text-indigo-600" />
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
          <div className="flex items-center gap-4">
            {!isLoaded || !user ? (
              <>
                <Link href="/login" className="nav-link">
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="btn-primary"
                >
                  Start creating
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="btn-primary">
                  Go to Dashboard
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}