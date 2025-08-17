"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Users, Code, Trophy } from "lucide-react";

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "Model Training Platform",
      description:
        "Train, track, and deploy models: dataset upload, MLflow experiments, HPO, ONNX export, and one-click deploys.",
      image: "/NLP.png?height=200&width=300",
      slug: "model-training-platform",
      live: "https://model-training-platform-six.vercel.app/",
    },
    {
      id: 2,
      title: "SecondBrain — AI Search & Notes",
      description:
        "Save links/notes and search instantly with embeddings + RAG chatbot. Share collections with a public link.",
      image: "/SecondBrain.png?height=200&width=300",
      slug: "secondbrain",
      live: "https://secondbrain-w94z.vercel.app/dashboard",
    },
    {
      id: 3,
      title: "Ragnum — Blockchain Wallet",
      description:
        "Non-custodial web wallet: generate/import seed phrases, manage multiple addresses, and add existing/new wallets.",
      image: "/Ragnum.png?height=200&width=300",
      slug: "ragnum-wallet",
      live: "https://ragnum.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#a8d5d1]">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl text-[#d4a574] mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
              VISHAL VERMA
            </h1>
            <p className="font-bold-display text-2xl md:text-3xl text-black mb-8">
              I build full-stack applications and AI/ML systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-[#90c695] border-4 border-black rounded-full px-8 py-4 font-bold-display text-lg text-black hover:scale-105 transition-transform shadow-lg inline-flex items-center"
              >
                VIEW PROJECTS
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/resume"
                className="bg-[#f4a460] border-4 border-black rounded-full px-8 py-4 font-bold-display text-lg text-black hover:scale-105 transition-transform shadow-lg inline-flex items-center"
              >
                RESUME
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-[#d4a574] text-center mb-12">
            FEATURED PROJECTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-2xl border-4 border-black mb-4 w-full"
                />
                <h3 className="font-bold-display text-xl text-black mb-2">
                  {project.title}
                </h3>
                <p className="font-bold-display text-black mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#90c695] border-2 border-black rounded-full px-4 py-2 font-bold-display text-sm hover:scale-105 transition-transform"
                  >
                    VIEW LIVE
                  </Link>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-[#87ceeb] border-2 border-black rounded-full px-4 py-2 font-bold-display text-sm hover:scale-105 transition-transform"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Strip */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="bg-[#90c695] border-4 border-black rounded-3xl p-4 shadow-lg">
                  <Image
                    src="/photo.jpeg?height=300&width=300"
                    alt="Vishal Verma"
                    width={300}
                    height={300}
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl text-[#d4a574] mb-6">
                  ABOUT ME
                </h2>
                <div className="space-y-4 font-bold-display text-black">
                  <div className="flex items-center space-x-3">
                    <Code className="text-[#f4a460]" size={24} />
                    <span>Full-stack & AI/ML engineer (DTU ECE)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Trophy className="text-[#f4a460]" size={24} />
                    <span>Focused on shipping: MLOps, RAG, Web3</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-[#f4a460]" size={24} />
                    <span>Open to collaborations & roles</span>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-block mt-6 bg-[#90c695] border-4 border-black rounded-full px-6 py-3 font-bold-display text-black hover:scale-105 transition-transform shadow-md"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-[#d4a574] text-center mb-12">
            ACHIEVEMENTS
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#f4a460] border-4 border-black rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <Trophy size={48} className="mx-auto mb-4 text-black" />
              <h3 className="font-bold-display text-black">Product Focus</h3>
            </div>
            <div className="bg-[#90c695] border-4 border-black rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <Users size={48} className="mx-auto mb-4 text-black" />
              <h3 className="font-bold-display text-black">Collaboration</h3>
            </div>
            <div className="bg-[#87ceeb] border-4 border-black rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <Code size={48} className="mx-auto mb-4 text-black" />
              <h3 className="font-bold-display text-black">Open Source</h3>
            </div>
            <div className="bg-[#e8d5b7] border-4 border-black rounded-2xl p-6 text-center hover:scale-105 transition-transform">
              <Star size={48} className="mx-auto mb-4 text-black" />
              <h3 className="font-bold-display text-black">
                Continuous Learning
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
