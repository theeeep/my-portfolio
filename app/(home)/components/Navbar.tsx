import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/devdeeepak",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/theeeep",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://x.com/dev_deee",
      label: "X",
      icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
        {"< Deepak />"} 👨🏼‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
