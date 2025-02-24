'use client';

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user.firstName || 'there'}!
        </h1>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
} 