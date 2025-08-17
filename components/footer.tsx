import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#a8d5d1] border-t-4 border-black mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-[#d4a574] mb-2">
              VISHAL VERMA
            </h3>
            <p className="font-bold-display text-black">
              Full Stack Developer building products that ship
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/vishal124942"
              className="bg-[#e8d5b7] border-4 border-black rounded-full p-3 hover:scale-105 transition-transform shadow-md"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishal-verma-355a9b1b4/"
              className="bg-[#87ceeb] border-4 border-black rounded-full p-3 hover:scale-105 transition-transform shadow-md"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/vishal70425"
              className="bg-[#90c695] border-4 border-black rounded-full p-3 hover:scale-105 transition-transform shadow-md"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="mailto:vishalverma4942@gmail.com"
              className="bg-[#f4a460] border-4 border-black rounded-full p-3 hover:scale-105 transition-transform shadow-md"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t-4 border-black text-center">
          <p className="font-bold-display text-black">
            © 2025 Vishal Verma. Built with Next.js & lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
