"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import aboutImg from "@/app/assets/images/aboutImg.jpeg";
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
        <li>Golang</li>
        <li>PostreSQL</li>
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
        <li>Golang</li>
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

  const currentTab = Tab_data.find(
    (t) => t.id.toLocaleLowerCase() === tab
  )?.content;

  return (
    <section>
      <div
        id="about"
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image src={aboutImg} alt="img" width={400} height={400} />
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <div className="space-y-4 text-base lg:text-lg leading-relaxed">
            <p>
              Hi, I’m Jamila. I was born on November 23, 2001, and I’m based in
              Tajikistan. I chose a self-taught path in programming after
              discovering a strong passion for building and understanding
              software through practice.
            </p>

            <p>
              I started with Python and front-end technologies (HTML, CSS,
              JavaScript), and I recently completed learning Golang — a language
              I feel especially connected to and plan to continue developing
              deeply. While I enjoy both front-end and back-end work, my main
              focus is growing as a Golang backend developer.
            </p>

            <p>
              I’m still early in my journey, but I’m highly motivated,
              constantly improving, and genuinely passionate about learning —
              both programming languages and human languages. I’m fluent in
              English, Russian, Tajik, and Persian, and I’m currently learning
              Spanish.
            </p>

            <p>
              I communicate easily with people, enjoy teamwork, and have strong
              skills in discussion, debating, and public speaking. Looking
              ahead, after strengthening my backend foundation, I’m also
              interested in exploring AI and machine learning.
            </p>
          </div>
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
