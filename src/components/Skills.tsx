"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Skills() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={skills1}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={skills2}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const skills1 = [
    {
        image: "/nextjs.png",
        name: "Next.js",
    },
    {
        image: "/react.png",
        name: "React.js",
    },
    {
        image: "/js.png",
        name: "JavaScript",
    },
    {
        image: "/typescript.png",
        name: "TypeScript",
    },
    {
        image: "/node-js.png",
        name: "Node.js",
    },
    {
        image: "/express.png",
        name: "Express.js",
    },
    {
        image: "/mongodb.png",
        name: "MongoDB",
    },
    {
        image: "/prisma.png",
        name: "Prisma",
    },
]
const skills2 = [
    {
        image: "/html.png",
        name: "HTML5",
    },
    {
        image: "/css.png",
        name: "CSS3",
    },
    {
        image: "/Firebase.png",
        name: "Firebase",
    },
    {
        image: "/framer.png",
        name: "FMotion",
    },
    {
        image: "/nextauth.png",
        name: "NextAuth.js",
    },
    {
        image: "/openai.png",
        name: "OpenAI",
    },
    {
        image: "/tailwind.png",
        name: "Tailwind",
    },
    {
        image: "/github.svg",
        name: "Github",
    },
]