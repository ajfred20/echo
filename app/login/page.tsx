'use client';

import Link from "next/link";
import { ArrowLeft, AudioWaveformIcon } from "lucide-react";
import { SignIn } from "@clerk/nextjs";
import { clerkTheme } from "../clerk-theme";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-50/50 blur-3xl"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-indigo-50/50 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-1">
          <AudioWaveformIcon className="w-6 h-6 text-indigo-600" />
          <span className="font-display font-bold text-xl text-black">echo</span>
        </Link>
        <Link 
          href="/"
          className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to home
        </Link>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>
          <SignIn appearance={clerkTheme} />
        </div>
      </div>
    </div>
  );
} 