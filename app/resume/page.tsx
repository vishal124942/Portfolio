"use client";

import { Download } from "lucide-react";

export default function ResumePage() {
  // Place your PDF at: public/resume/vishal-verma-resume.pdf
  // Then this path will work at runtime:
  const RESUME_PDF = "/Users/apple/Downloads/portfolio_website/app/Resume.pdf";

  return (
    <div className="min-h-screen bg-[#a8d5d1] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-6xl text-[#d4a574] mb-4">
            MY RESUME
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/api/download-resume"
              download
              className="bg-[#f4a460] border-4 border-black rounded-full px-6 py-3 font-bold-display text-black hover:scale-105 transition-transform shadow-md inline-flex items-center justify-center"
            >
              <Download className="mr-2" size={20} />
              DOWNLOAD PDF
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white border-4 border-black rounded-3xl shadow-lg p-8 print:shadow-none print:border-none">
          {/* Header */}
          <div className="text-center mb-8 print:mb-6">
            <h1 className="font-display text-4xl text-[#d4a574] mb-2 print:text-black print:text-3xl">
              VISHAL VERMA
            </h1>
            <p className="font-bold-display text-xl text-black">
              AI/ML Engineer
            </p>
            <div className="font-bold-display text-black mt-2 space-y-1">
              <p>
                <a
                  href="mailto:vishalverma4942@gmail.com"
                  className="underline"
                >
                  vishalverma4942@gmail.com
                </a>{" "}
                |{" "}
                <a href="tel:+917310885365" className="underline">
                  +91 7310885365
                </a>{" "}
                | Delhi, India
              </p>
              <p>
                <a
                  href="https://github.com/vishal124942"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  github.com/vishal124942
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/vishal-verma-355a9b1b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  linkedin.com/in/vishal-verma-355a9b1b4
                </a>
              </p>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="font-display text-2xl text-[#d4a574] border-b-2 border-black mb-4 print:text-black">
              SUMMARY
            </h2>
            <p className="font-bold-display text-black leading-relaxed">
              AI/ML engineer and full-stack developer focused on practical model
              training and deployment. Experience includes NER dataset
              preparation and transformer workflows, real-time observability
              (Prometheus/Grafana), and building a full-stack model training
              platform with streaming logs, evaluation, and ONNX export.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="font-display text-2xl text-[#d4a574] border-b-2 border-black mb-4 print:text-black">
              SKILLS
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold-display text-lg text-black mb-2">
                  Languages
                </h3>
                <p className="font-bold-display text-black">
                  Python, JavaScript, HTML5, CSS3
                </p>
              </div>
              <div>
                <h3 className="font-bold-display text-lg text-black mb-2">
                  Frameworks
                </h3>
                <p className="font-bold-display text-black">
                  React.js, Next.js, Node.js, Express, MongoDB, Tailwind
                </p>
              </div>
              <div>
                <h3 className="font-bold-display text-lg text-black mb-2">
                  Tools
                </h3>
                <p className="font-bold-display text-black">
                  Git/GitHub, REST APIs, Webpack, VS Code, Postman
                </p>
              </div>
              <div>
                <h3 className="font-bold-display text-lg text-black mb-2">
                  ML/Infra
                </h3>
                <p className="font-bold-display text-black">
                  Transformers, ONNX, Prometheus, Grafana
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="font-display text-2xl text-[#d4a574] border-b-2 border-black mb-4 print:text-black">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold-display text-lg text-black">
                    AI/ML Intern — Novel Patterns, Noida
                  </h3>
                  <span className="font-bold-display text-black">
                    Feb 2025 – Aug 2025
                  </span>
                </div>
                <ul className="list-disc list-inside font-bold-display text-black space-y-1">
                  <li>
                    Worked on Named Entity Recognition (NER) tagging dataset
                    preparation using transformer-based models.
                  </li>
                  <li>
                    Built Prometheus and Grafana dashboards for real-time system
                    monitoring and visualization.
                  </li>
                  <li>
                    Designed and implemented a full-stack model training
                    platform with streaming logs, ONNX export, and evaluation
                    support.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="font-display text-2xl text-[#d4a574] border-b-2 border-black mb-4 print:text-black">
              KEY PROJECTS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold-display text-lg text-black">
                  Ragnum — Blockchain Wallet
                </h3>
                <p className="font-bold-display text-black">
                  Decentralized wallet with wallet generation, mnemonic/seed
                  phrase management, import & restoration. Frontend built with
                  React.js & Tailwind; Web3 stack via ethers.js/Web3.js.
                </p>
                <p className="font-bold-display text-black mt-1">
                  Live:{" "}
                  <a
                    href="https://ragnum.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    ragnum.vercel.app
                  </a>{" "}
                  | Repo:{" "}
                  <a
                    href="https://github.com/vishal124942/Ragnum"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    github.com/vishal124942/Ragnum
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold-display text-lg text-black">
                  Secondbrain
                </h3>
                <p className="font-bold-display text-black">
                  “Second brain” to store and organize links to articles, audio,
                  videos, and blogs with fast tagging, collections, and
                  type-aware filters. One-click share of the whole workspace or
                  selected collections. Integrated chatbot to search across
                  saved content.
                </p>
                <p className="font-bold-display text-black mt-1">
                  Live:{" "}
                  <a
                    href="https://secondbrain-w94z.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    secondbrain-w94z.vercel.app
                  </a>{" "}
                  | Repo:{" "}
                  <a
                    href="https://github.com/vishal70425/Secondbrain"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    github.com/vishal70425/Secondbrain
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold-display text-lg text-black">
                  Model Training Platform
                </h3>
                <p className="font-bold-display text-black">
                  Full-stack interface (FastAPI + React.js) to upload training
                  files, stream logs, evaluate models, and export to ONNX.
                  Integrated secure checkpointing and ONNX metadata
                  serialization for better inference integration.
                </p>
                <p className="font-bold-display text-black mt-1">
                  Repo:{" "}
                  <a
                    href="https://github.com/vishal124942/Model_Training_Platform"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    github.com/vishal124942/Model_Training_Platform
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="font-display text-2xl text-[#d4a574] border-b-2 border-black mb-4 print:text-black">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold-display text-lg text-black">
                    B.Tech — Electronics & Communication Engineering
                  </h3>
                  <span className="font-bold-display text-black">
                    2021 – 2025
                  </span>
                </div>
                <p className="font-bold-display text-black">
                  Delhi Technological University, Delhi &nbsp;•&nbsp; GPA: 7.14
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold-display text-lg text-black">
                    Higher Secondary
                  </h3>
                  <span className="font-bold-display text-black">2021</span>
                </div>
                <p className="font-bold-display text-black">
                  Godwin Public School, Meerut &nbsp;•&nbsp; 97%
                </p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="font-display text-2xl text-[#d4a574] border-b-2 border-black mb-4 print:text-black">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside font-bold-display text-black space-y-2">
              <li>JEE-MAINS 2021 — AIR 16603</li>
              <li>JEE-ADVANCED 2021 — AIR 13565</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
