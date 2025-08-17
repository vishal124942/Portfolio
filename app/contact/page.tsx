"use client";

import type React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // hidden anti-bot field (server ignores real users)
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));

  return (
    <div className="min-h-screen bg-[#a8d5d1] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#d4a574] mb-4">
            GET IN TOUCH
          </h1>
          <p className="font-bold-display text-xl text-black">
            Let's build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8">
            <h2 className="font-display text-3xl text-[#d4a574] mb-6">
              SEND MESSAGE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block font-bold-display text-black mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-4 border-black rounded-2xl bg-white font-bold-display text-black focus:outline-none focus:ring-4 focus:ring-[#90c695]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-bold-display text-black mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-4 border-black rounded-2xl bg-white font-bold-display text-black focus:outline-none focus:ring-4 focus:ring-[#90c695]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block font-bold-display text-black mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 border-4 border-black rounded-2xl bg-white font-bold-display text-black focus:outline-none focus:ring-4 focus:ring-[#90c695] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="w-full bg-[#f4a460] border-4 border-black rounded-full px-8 py-4 font-bold-display text-lg text-black hover:scale-105 transition-transform shadow-lg inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="mr-2" size={20} />
                {status === "sending" ? "SENDING..." : "SEND MESSAGE!"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-3 bg-white border-2 border-black rounded-xl p-3 text-green-700 font-bold-display"
                >
                  ✅ Message sent! I’ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div
                  role="status"
                  aria-live="assertive"
                  className="mt-3 bg-white border-2 border-black rounded-xl p-3 text-red-700 font-bold-display"
                >
                  ❌ {errorMsg}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Booking */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8">
              <h2 className="font-display text-3xl text-[#d4a574] mb-6">
                CONTACT INFO
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#90c695] border-2 border-black rounded-full p-3">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-bold-display text-black">
                      vishalverma4942@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#87ceeb] border-2 border-black rounded-full p-3">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-bold-display text-black">
                      +91-7310885365
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f4a460] border-2 border-black rounded-full p-3">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-bold-display text-black">Delhi, India</p>
                    <p className="font-bold-display text-black text-sm">
                      Open to remote work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#e8d5b7] rounded-3xl border-4 border-black shadow-lg p-8">
              <h2 className="font-display text-3xl text-[#d4a574] mb-6">
                CONNECT
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/vishal124942"
                  className="bg-[#90c695] border-4 border-black rounded-2xl p-4 hover:scale-105 transition-transform shadow-md flex items-center space-x-3"
                >
                  <Github size={24} className="text-black" />
                  <span className="font-bold-display text-black">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-verma-355a9b1b4/"
                  className="bg-[#87ceeb] border-4 border-black rounded-2xl p-4 hover:scale-105 transition-transform shadow-md flex items-center space-x-3"
                >
                  <Linkedin size={24} className="text-black" />
                  <span className="font-bold-display text-black">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/vishal70425"
                  className="bg-[#f4a460] border-4 border-black rounded-2xl p-4 hover:scale-105 transition-transform shadow-md flex items-center space-x-3"
                >
                  <Twitter size={24} className="text-black" />
                  <span className="font-bold-display text-black">Twitter</span>
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-[#90c695] border-4 border-black rounded-3xl p-6 text-center">
              <h3 className="font-display text-2xl text-black mb-2">
                QUICK RESPONSE
              </h3>
              <p className="font-bold-display text-black">
                I typically respond within 24 hours. For urgent matters, feel
                free to call!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
