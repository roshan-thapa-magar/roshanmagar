"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Monitor,
  Smartphone,
  Server,
  Cloud,
  PenTool,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section id="services" className="min-h-screen pt-32 lg:pt-26">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-lg max-w-4xl mx-auto">
          I offer a wide range of development and design services to help you
          build scalable, efficient, and user-friendly digital solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Web Development */}
        <Card>
          <CardHeader className="flex flex-col items-start gap-2">
            <Monitor className="w-12 h-12 text-blue-500" />
            <CardTitle className="text-xl font-semibold">
              Web Development
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-justify">
            <p>
              Building responsive, SEO-friendly websites and web applications
              using React, Next.js, and modern frontend/backend technologies.
            </p>
            <Button disabled variant="outline" className="mt-4 cursor-pointer">
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* Mobile Apps */}
        <Card>
          <CardHeader className="flex flex-col items-start gap-2">
            <Smartphone className="w-12 h-12 text-blue-500" />
            <CardTitle className="text-xl font-semibold">
              Mobile Development (Self-Learned)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-justify">
            <p>
              Gained hands-on experience through self-learning with Flutter and
              React Native to understand mobile app fundamentals and development
              workflows.
            </p>
            <Button disabled variant="outline" className="mt-4 cursor-pointer">
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* Backend & APIs */}
        <Card>
          <CardHeader className="flex flex-col items-start gap-2">
            <Server className="w-12 h-12 text-blue-500" />
            <CardTitle className="text-xl font-semibold">
              Backend & APIs
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-justify">
            <p>
              Developing robust RESTful APIs and backend services with Node.js,
              FastAPI, and PHP to power your applications securely and
              efficiently.
            </p>
            <Button disabled variant="outline" className="mt-4 cursor-pointer">
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* Web Hosting */}
        <Card>
          <CardHeader className="flex flex-col items-start gap-2">
            <Cloud className="w-12 h-12 text-blue-500" />
            <CardTitle className="text-xl font-semibold">Web Hosting</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-justify">
            <p>
              Reliable and scalable web hosting solutions to keep your
              applications online and performing at their best.
            </p>
            <Button disabled variant="outline" className="mt-4 cursor-pointer">
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* UI/UX Design */}
        <Card>
          <CardHeader className="flex flex-col items-start gap-2">
            <PenTool className="w-12 h-12 text-blue-500" />
            <CardTitle className="text-xl font-semibold">
              UI/UX Design
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-justify">
            <p>
              Designing user-friendly interfaces and intuitive experiences using
              Figma and best practices in responsive design.
            </p>
            <Button disabled variant="outline" className="mt-4 cursor-pointer">
              Learn More
            </Button>
          </CardContent>
        </Card>

        {/* Database */}
        <Card>
          <CardHeader className="flex flex-col items-start gap-2">
            <Database className="w-12 h-12 text-blue-600" />
            <CardTitle className="text-xl font-semibold">
              Database Management
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-justify">
            <p>
              Expertise in designing and managing databases like MongoDB, MySQL,
              Firebase, and Supabase for robust data storage solutions.
            </p>
            <Button disabled variant="outline" className="mt-4 cursor-pointer">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
