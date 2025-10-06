"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

// TypeScript interfaces for better code structure
interface ContactInfo {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  type: "email" | "phone" | "location" | "availability" | "timezone";
}

interface ContactSectionProps {
  className?: string;
}

// Contact information data
const contactData: ContactInfo[] = [
  {
    id: "email",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "roshanthapamagar004@gmail.com",
    link: "mailto:roshanthapamagar004@gmail.com",
    type: "email",
  },
  {
    id: "phone",
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+977 97425 31161",
    link: "tel:+9779742531161",
    type: "phone",
  },
  {
    id: "location",
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Hattigauda, Kathmandu, Nepal",
    type: "location",
  },
  // {
  //   id: 'availability',
  //   icon: <MessageCircle className="w-5 h-5" />,
  //   label: 'Availability',
  //   value: 'Open for new opportunities',
  //   type: 'availability'
  // },
  // {
  //   id: 'timezone',
  //   icon: <Clock className="w-5 h-5" />,
  //   label: 'Timezone',
  //   value: 'NPT (UTC+5:45)',
  //   type: 'timezone'
  // }
];

// Helper function to format email display
const formatEmailDisplay = (email: string) => {
  if (email.length > 25) {
    return email.substring(0, 22) + "...";
  }
  return email;
};

// Contact Item Component
const ContactItem: React.FC<{ contact: ContactInfo; index: number }> = ({
  contact,
}) => {
  const handleClick = () => {
    if (contact.link) {
      window.open(contact.link, "_blank");
    }
  };

  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl border bg-card p-6 
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:shadow-primary/10
        ${contact.link ? "cursor-pointer" : ""}
        ${contact.link ? "hover:border-primary/50" : ""}
      `}
      onClick={contact.link ? handleClick : undefined}
      role={contact.link ? "button" : undefined}
      tabIndex={contact.link ? 0 : undefined}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (contact.link && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 flex items-start gap-4 h-full">
        {/* Icon container */}
        <div
          className={`
          flex-shrink-0 p-3 rounded-full 
          bg-primary/10 text-primary
          group-hover:bg-primary group-hover:text-primary-foreground
          transition-all duration-300 ease-in-out
        `}
        >
          {contact.icon}
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {contact.label}
          </p>
          <p
            className={`
              font-semibold text-base sm:text-lg leading-tight break-words overflow-hidden
              ${
                contact.link
                  ? "group-hover:text-primary transition-colors duration-300"
                  : ""
              }
              ${contact.type === "email" ? "text-sm sm:text-base" : ""}
            `}
            title={contact.type === "email" ? contact.value : undefined}
          >
            {contact.type === "email"
              ? formatEmailDisplay(contact.value)
              : contact.value}
          </p>
        </div>

        {/* Arrow indicator for clickable items */}
        {contact.link && (
          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Globe className="w-4 h-4 text-primary" />
          </div>
        )}
      </div>
    </div>
  );
};

// Main Contact Component
const Contact: React.FC<ContactSectionProps> = ({ className = "" }) => {
  return (
    <section
      id="contact"
      className={`
        min-h-screen pt-32 lg:pt-26 
        px-4 sm:px-6 lg:px-8 
        bg-gradient-to-b from-background to-background/95
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            I&apos;m always excited to discuss new opportunities, collaborate on
            interesting projects, or simply connect with fellow developers and
            designers.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {contactData.map((contact, index) => (
            <ContactItem key={contact.id} contact={contact} index={index} />
          ))}
        </div>

        {/* Additional Info Card */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you have a specific project in mind or just want to
                explore possibilities, I&apos;d love to hear from you.
                Let&apos;s create something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:roshanthapamagar004@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href="tel:+9779742531161"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
