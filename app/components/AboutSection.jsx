"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import imggg from "@/app/assets/images/imggg.jpg";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const Tab_data = [
  {
    id: "Skills",
    title: "Skills",
    content: (
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Next.js</li>
        <li>Tailwindcss</li>
      </ul>
    ),
  },
  {
    id: "Experience",
    title: "Experience",
    content: (
      <ul>
        <li>Teaching English - Bright future International School</li>
        <li>Teaching English - Yodgir</li>
        <li>No experience in Progrmming yet</li>
      </ul>
    ),
  },
  {
    id: "Certification",
    title: "Certification",
    content: (
      <ul>
        <li>English for Academic Purposes - level 1</li>
        <li>Python level 1</li>
        <li>web-0</li>
        <li>Javascript levels 1, 2</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

const currentTab = Tab_data.find((t) => t.id.toLocaleLowerCase() === tab)?.content;

  return (
    <section>
      <div id="about" className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={imggg} alt="img" width={400} height={400} />
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a front-end developer who loves seeing ideas come to life
            through code. It’s amazing how writing something on a screen can
            turn into something real, interactive, and beautiful. I’m drawn to
            this field because it’s always changing — there’s always something
            new to learn, and I enjoy the challenge it brings. Right now, I’m
            exploring different areas of development and learning Go alongside
            my front-end work. I’m focused, responsible, and always curious. I
            enjoy working alone or with others, and I love discovering new
            skills through building real projects. My goal is to grow, create,
            and keep challenging myself with every step.
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">{currentTab}</div>
        </div>
      </div>
    </section>
  );
}
