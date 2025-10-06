"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import food from "../../assets/images/food.png";
import barber from "../../assets/images/image.png";

interface Project {
  id: number;
  name: string;
  description: string;
  images: (string | StaticImageData)[];
  sourceCode: string;
  liveDemo: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Restaurant Management System",
      description:
        "A full-stack restaurant management app with real-time orders, billing, table management, and payment integration.",
      images: [food],
      sourceCode:
        "https://github.com/roshan-thapa-magar/Restaurant-Management-System",
      liveDemo: "https://dinex.vercel.app/",
    },
    {
      id: 2,
      name: "Barber Management System",
      description:
        "A complete barber shop management platform for handling appointments, staff schedules, customer records, and service billing with a clean dashboard UI.",
      images: [barber],
      sourceCode: "https://github.com/roshan-thapa-magar/barber-shop",
      liveDemo: "https://rojan-three.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700">
          Here are some of the projects I’ve worked on recently.
        </p>
      </div>

      <div className="max-w-8xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(
          ({ id, name, description, images, sourceCode, liveDemo }) => (
            <Card
              key={id}
              className="flex flex-col rounded-xl shadow-md overflow-hidden p-4"
            >
              {/* Image */}
              <div className="relative w-full h-48 rounded">
                <Image
                  src={images[0]}
                  alt={`${name} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mt-4">{name}</h3>
                <p className="text-gray-600 mt-2 flex-grow">{description}</p>

                <div className="mt-4 mb-4 flex gap-4">
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-blue-600 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  >
                    Source Code
                  </a>
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-green-600 rounded text-green-600 hover:bg-green-600 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
