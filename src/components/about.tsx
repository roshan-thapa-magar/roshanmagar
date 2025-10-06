"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen pt-32 lg:pt-26">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-5xl mx-auto">
          I&apos;m a full-stack developer skilled in building fast, scalable,
          and user-friendly applications. With strong UI/UX and backend
          expertise, I create seamless digital experiences. I focus on clean
          code, performance, and collaboration to deliver reliable and
          maintainable solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Skills Card */}
        <Card>
          <CardHeader>
            <CardTitle className="underline decoration-green-800 decoration-4 underline-offset-4">
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <p className="font-semibold">Frontend:</p>
              <p>HTML,CSS,Next.js, React, TypeScript, Tailwind CSS,SadCN,</p>
            </div>
            <div>
              <p className="font-semibold">Backend:</p>
              <p>FastAPI, Node.js, Express,PHP</p>
            </div>
            <div>
              <p className="font-semibold">Database:</p>
              <p>MongoDB, MySQL,Firebase,Supabase</p>
            </div>
            <div>
              <p className="font-semibold">UI/UX:</p>
              <p>Figma, Responsive Design</p>
            </div>
            <div>
              <p className="font-semibold">Mobile App:</p>
              <p>Flutter,React Native</p>
            </div>
          </CardContent>
        </Card>

        {/* Education Card */}
        <Card>
          <CardHeader>
            <CardTitle className="underline decoration-green-800 decoration-4 underline-offset-4">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <p className="font-semibold">SLC/10th:</p>
              <p>Kalidevi Mabi, Siddalek-4, Dhading</p>
            </div>
            <div>
              <p className="font-semibold">12th:</p>
              <p>Nilkantha Secondary School, Dhading</p>
            </div>
            <div>
              <p className="font-semibold">Bachelor&apos;s in IT:</p>
              <p>Herald College, Kathmandu, Naxal</p>
              <p>BSc(2023-2025)</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Card */}
        <Card>
          <CardHeader>
            <CardTitle className="underline decoration-green-800 decoration-4 underline-offset-4">
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <p>3 months internship at Octspace</p>
            <p>Worked with Next.js, TypeScript, and shadcn/ui</p>
            <p>Focused on building responsive and modern web applications</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Resume
          </Button>
        </a>
        <a
          href="https://github.com/roshan-thapa-magar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </Button>
        </a>
        <a href="mailto:your-email@example.com">
          <Button variant="secondary" className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> Hire Me
          </Button>
        </a>
      </div>
    </section>
  );
}
