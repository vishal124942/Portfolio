"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Model Training Platform",
    description:
      " web app to train, track, and serve models: dataset upload, ONNX export, GPU/CPU runners",
    tags: ["Next.js", "FastAPI", "ONNX", "Docker"],
    year: 2025,
    metric: "Bert-Ner-Trainer",
    image: "/NLP.png?height=250&width=400",
    slug: "model-training-platform",
    live: "https://model-training-platform-six.vercel.app/",
  },
  {
    id: 2,
    title: "SecondBrain — AI Search & Notes",
    description:
      "AI second brain to save links/notes and search instantly with embeddings + RAG chatbot. Share collections via link and explore a clean dashboard.",
    tags: ["AI/ML", "RAG", "Vector Search", "FAISS", "Next.js"],
    year: 2025,
    metric: "Knowledge Hub",
    image: "/SecondBrain.png?height=250&width=400",
    slug: "secondbrain",
    live: "https://secondbrain-w94z.vercel.app/dashboard",
  },
  {
    id: 3,
    title: "Ragnum — Blockchain Wallet",
    description:
      "Non-custodial web wallet: generate/import seed phrases, manage multiple addresses, and add existing/new wallets with a clean Next.js UI.",
    tags: ["Web3", "Blockchain", "Wallet", "Next.js", "Ethers.js"],
    year: 2025,
    metric: "Wallet Manager",
    image: "/Ragnum.png?height=250&width=400",
    slug: "ragnum-wallet",
    live: "https://ragnum.vercel.app/",
  },
];

const allTags = [
  "Next.js",
  "ONNX",
  "Docker",
  "AI/ML",
  "RAG",
  "Vector Search",
  "FAISS",
  "Web3",
  "React",
  "Python",
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-[#a8d5d1] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#d4a574] mb-4">
            MY PROJECTS
          </h1>
          <p className="font-bold-display text-xl text-black">
            Building AI products that solve real problems
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-4 border-black rounded-full font-bold-display text-black bg-white focus:outline-none focus:ring-4 focus:ring-[#90c695]"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-black" />
            <span className="font-bold-display text-black">
              Filter by tags:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full border-2 border-black font-bold-display text-sm transition-all hover:scale-105 ${
                  selectedTags.includes(tag)
                    ? "bg-[#f4a460] text-black"
                    : "bg-[#90c695] text-black hover:bg-[#87ceeb]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="mt-4 bg-[#87ceeb] border-2 border-black rounded-full px-4 py-2 font-bold-display text-sm hover:scale-105 transition-transform"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-12 text-center">
            <h3 className="font-display text-2xl text-[#d4a574] mb-4">
              NO PROJECTS FOUND
            </h3>
            <p className="font-bold-display text-black mb-6">
              Try adjusting your search terms or clearing the filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTags([]);
              }}
              className="bg-[#90c695] border-4 border-black rounded-full px-6 py-3 font-bold-display text-black hover:scale-105 transition-transform shadow-md"
            >
              SHOW ALL PROJECTS
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-2xl border-4 border-black mb-4 w-full"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold-display text-xl text-black">
                    {project.title}
                  </h3>
                  <span className="bg-[#d4a574] border-2 border-black rounded-full px-3 py-1 text-sm font-bold-display">
                    {project.year}
                  </span>
                </div>
                <p className="font-bold-display text-black mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#90c695] border-2 border-black rounded-full px-3 py-1 text-sm font-bold-display"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-[#f4a460] border-2 border-black rounded-full px-3 py-1 font-bold-display text-sm">
                    {project.metric}
                  </span>
                  <div className="flex gap-2">
                    {"live" in project && project.live ? (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#90c695] border-2 border-black rounded-full px-4 py-2 font-bold-display text-sm hover:scale-105 transition-transform"
                      >
                        VIEW LIVE
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
