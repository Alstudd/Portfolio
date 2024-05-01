"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function SkillSlider() {
  return (
    <div className="mt-20 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={frameworks}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={databases}
        direction="left"
        speed="normal"
      />
      <InfiniteMovingCards
        items={languages}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={technologies}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const frameworks = [
    {
        image: "/skills/nextjs.png",
        name: "Next.js",
    },
    {
        image: "/skills/react.png",
        name: "React.js",
    },
    {
        image: "/skills/Flask.png",
        name: "Flask",
    },
    {
        image: "/skills/express.png",
        name: "Express.js",
    },
    {
        image: "/skills/node-js.png",
        name: "Node.js",
    },
    {
        image: "/skills/Astro.png",
        name: "Astro.js",
    },
    {
        image: "/skills/Svelte.png",
        name: "SvelteKit",
    },
    {
        image: "/skills/tailwind.png",
        name: "TailwindCSS",
    },
    {
        image: "/skills/Hardhat.png",
        name: "Hardhat",
    },
    {
        image: "/skills/Bootstrap.png",
        name: "Bootstrap",
    },
    {
        image: "/skills/mui.png",
        name: "MaterialUI",
    },
]
const languages = [
    {
        image: "/skills/Python.png",
        name: "Python",
    },
    {
        image: "/skills/js.png",
        name: "JavaScript",
    },
    {
        image: "/skills/Solidity.png",
        name: "Solidity",
    },
    {
        image: "/skills/Markdown.png",
        name: "Markdown",
    },
    {
        image: "/skills/C.png",
        name: "C",
    },
    {
        image: "/skills/C++.png",
        name: "C++",
    },
    {
        image: "/skills/typescript.png",
        name: "TypeScript",
    },
    {
        image: "/skills/html.png",
        name: "HTML5",
    },
    {
        image: "/skills/Git.png",
        name: "Git",
    },
    {
        image: "/skills/html.png",
        name: "HTML5",
    },
    {
        image: "/skills/css.png",
        name: "CSS3",
    },
    {
        image: "/skills/Java.png",
        name: "Java",
    },
]
const databases = [
    {
        image: "/skills/mongodb.png",
        name: "MongoDB",
    },
    {
        image: "/skills/prisma.png",
        name: "Prisma",
    },
    {
        image: "/skills/MySQL.png",
        name: "MySQL",
    },
    {
        image: "/skills/Firebase.png",
        name: "Firebase",
    },
    {
        image: "/skills/Pinecone.png",
        name: "Pinecone",
    },
    {
        image: "/skills/neondb.png",
        name: "NeonDB",
    },
    {
        image: "/skills/sqlalchemy.png",
        name: "SQLAlchemy",
    },
    {
        image: "/skills/SQLite.png",
        name: "SQLite",
    },
    {
        image: "/skills/postgres.png",
        name: "PostgreSQL",
    },
]
const technologies = [
    {
        image: "/skills/Postman.png",
        name: "Postman",
    },
    {
        image: "/skills/Zod.png",
        name: "Zod",
    },
    {
        image: "/skills/nextauth.png",
        name: "NextAuth.js",
    },
    {
        image: "/skills/react-query.png",
        name: "ReactQuery",
    },
    {
        image: "/skills/openai.png",
        name: "OpenAI",
    },
    {
        image: "/skills/Streamlit.png",
        name: "Streamlit",
    },
    {
        image: "/skills/Azure.png",
        name: "Azure",
    },
    {
        image: "/skills/Pandas.png",
        name: "Pandas",
    },
    {
        image: "/skills/Numpy.png",
        name: "Numpy",
    },
    {
        image: "/skills/OpenCV.png",
        name: "OpenCV",
    },
    {
        image: "/skills/scikit-learn.png",
        name: "Sklearn",
    },
    {
        image: "/skills/github.svg",
        name: "Github",
    },
    {
        image: "/skills/Kaggle.png",
        name: "Kaggle",
    },
    {
        image: "/skills/Jupyter.png",
        name: "Jupyter",
    },
]