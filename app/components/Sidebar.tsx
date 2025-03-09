'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronLeft, 
  Home, 
  Mic2, 
  Settings, 
  HelpCircle,
  BarChart2,
  FolderOpen,
  Menu,
  AudioWaveform,
  Headphones,
  Music
} from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { icon: Home, label: 'Overview', href: '/dashboard' },
  { icon: Mic2, label: 'Text to Podcast', href: '/dashboard/create/text-to-podcast' },
  { icon: FolderOpen, label: 'My Projects', href: '/dashboard/projects' },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
  { icon: Headphones, label: 'Voice Generation', href: '/dashboard/create/voice' },
  { icon: Music, label: 'Audio Enhancement', href: '/dashboard/create/enhance' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div 
      className={clsx(
        "h-screen fixed left-0 top-0 z-40 bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <AudioWaveform className="w-6 h-6 text-indigo-600" />
            <span className="font-display font-bold text-xl text-gray-900">echo</span>
          </div>
        ) : (
          <AudioWaveform className="w-6 h-6 text-indigo-600" />
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === item.href 
                ? "bg-indigo-50 text-indigo-600" 
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <item.icon size={20} />
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
} 