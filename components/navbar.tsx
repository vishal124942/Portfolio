"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  BookOpen,
  Clock,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "HOME", icon: Home },
    { href: "/about", label: "ABOUT", icon: User },
    { href: "/projects", label: "PROJECTS", icon: Briefcase },
    { href: "/resume", label: "RESUME", icon: FileText },
    { href: "/contact", label: "CONTACT", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#a8d5d1] border-b-4 border-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[#d4a574] text-black px-4 py-2 rounded-full border-4 border-black font-display text-xl font-bold hover:scale-105 transition-transform shadow-md">
              VISHAL
            </div>
          </Link>
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full border-4 border-black font-bold-display text-sm transition-all hover:scale-105 shadow-md ${
                    isActive
                      ? "bg-[#f4a460] text-black"
                      : "bg-[#e8d5b7] text-black hover:bg-[#d4a574]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="bg-[#e8d5b7] border-4 border-black rounded-full p-2 hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
