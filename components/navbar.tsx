"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FileText, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full border-4 border-black font-bold-display text-sm transition-all hover:scale-105 shadow-md ${
                    isActive
                      ? "bg-[#f4a460] text-black"
                      : "bg-[#e8d5b7] text-black hover:bg-[#d4a574]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="bg-[#e8d5b7] border-4 border-black rounded-full p-2 hover:scale-105 transition-transform"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (slides from the left) */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`absolute left-0 top-0 h-full w-80 max-w-[85%] bg-[#a8d5d1] border-r-4 border-black shadow-2xl
                      transform transition-transform duration-300 ease-out
                      ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b-4 border-black">
            <span className="font-display text-xl text-black">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="bg-[#e8d5b7] border-4 border-black rounded-full p-2 hover:scale-105 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="px-4 py-4 space-y-3">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-4 border-black font-bold-display text-sm shadow-md transition
                    ${
                      isActive
                        ? "bg-[#f4a460]"
                        : "bg-[#e8d5b7] hover:bg-[#d4a574]"
                    }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </aside>
      </div>
    </nav>
  );
}
