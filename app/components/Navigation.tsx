'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { ArrowRight, AudioWaveform } from "lucide-react";

export default function Navigation() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-2xl z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <AudioWaveform className="w-8 h-8 text-indigo-600" />
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">
              echo
            </span>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/templates" className="nav-link">Templates</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/community" className="nav-link">Community</Link>
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
        </div>
      </div>
    </nav>
  );
} 