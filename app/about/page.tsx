import Image from "next/image";
import Link from "next/link";
import { Award, Users, Code, Trophy } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "C++", level: 78 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 82 },
    { name: "Tailwind CSS", level: 80 },
    { name: "shadcn/ui", level: 70 },
    { name: "Node.js", level: 78 },
    { name: "Express.js", level: 76 },
    { name: "MongoDB", level: 75 },
    { name: "Docker", level: 75 },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Guessapalooza Winner",
      description: "First place in  with innovative ML solution",
      year: "2024",
    },
    {
      icon: Users,
      title: "Cricket Team Captain",
      description: "Led DTU cricket team to inter-college championship",
      year: "2023",
    },

    {
      icon: Award,
      title: "Academic Excellence",
      description: "Top 5% in ECE Final coursework at DTU",
      year: "2025",
    },
  ];

  return (
    <div className="min-h-screen bg-[#a8d5d1] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#d4a574] mb-4">
            ABOUT ME
          </h1>
          <p className="font-bold-display text-xl text-black">
            The story behind the code
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl text-[#d4a574] mb-6">
                MY JOURNEY
              </h2>
              <div className="space-y-4 font-bold-display text-black">
                <p>
                  I'm Vishal Verma — B.Tech (ECE) from Delhi Technological
                  University (DTU).
                </p>
                <p>
                  Full-stack developer (frontend + backend) and AI/ML engineer.
                  Currently an AI/ML Intern at <strong>Novel Patterns</strong>,
                  Noida, India, where I’ve worked on
                  <strong>
                    {" "}
                    Named Entity Recognition(NER), Model Training and Evaluation
                    and Promethesus and Grafana Dashboards
                  </strong>{" "}
                  systems.
                </p>
                <p>
                  Projects: <strong>Model Training Platform</strong> (MLOps &
                  one-click deploys),
                  <strong> SecondBrain</strong> (RAG search & notes), and{" "}
                  <strong>Ragnum</strong> (non-custodial blockchain wallet)
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#90c695] border-4 border-black rounded-3xl p-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Vishal Verma"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8 mb-12">
          <h2 className="font-display text-3xl text-[#d4a574] text-center mb-8">
            SKILLS & EXPERTISE
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white border-4 border-black rounded-2xl p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold-display text-black">
                    {skill.name}
                  </span>
                  <span className="font-bold-display text-black">
                    {skill.level}%
                  </span>
                </div>
                <div className="bg-[#d4a574] border-2 border-black rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-[#90c695] h-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

       
        {/* CTA */}
        <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8 text-center">
          <h2 className="font-display text-3xl text-[#d4a574] mb-4">
            LET'S BUILD SOMETHING AMAZING
          </h2>
          <p className="font-bold-display text-black mb-6">
            Ready to turn your AI ideas into reality? Let's chat about your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#90c695] border-4 border-black rounded-full px-6 py-3 font-bold-display text-black hover:scale-105 transition-transform shadow-md"
            >
              GET IN TOUCH
            </Link>
            <Link
              href="/projects"
              className="bg-[#87ceeb] border-4 border-black rounded-full px-6 py-3 font-bold-display text-black hover:scale-105 transition-transform shadow-md"
            >
              VIEW MY WORK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
