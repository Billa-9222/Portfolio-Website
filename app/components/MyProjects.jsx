import Image from "next/image";
import typingTest from "@/app/assets/images/typingTest.png";
import organicFood from "@/app/assets/images/organicFood.png";
import portfolio from "@/app/assets/images/portfolio.png";
import goFirst from "@/app/assets/images/goFirst.jpg";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "Typing Test App",
      image: typingTest,
      link: "https://my-typing-app-3qx4.vercel.app",
      description:
        "A simple typing test app that checks your typing speed and accuracy.",
    },
    {
      id: 2,
      title: "Online Shop for Organic Food",
      image: organicFood,
      link: "https://online-shop-beta-eight.vercel.app",
      description:
        "An online shop for organic food that allows users to browse and purchase products.",
    },
    {
      id: 3,
      title: "Persional Portfolio",
      image: portfolio,
      link: "https://first-project-one-sandy.vercel.app",
      description: "A simple personal portfolio ",
    },
    {
      id: 4,
      title: "Grade Tracker",
      image: goFirst,
      link: "https://github.com/Billa-9222/Grade_Tracker_backend",
      description: "Grade tracking app",
    },
  ];

  return (
    <div id="projects" className="flex flex-col items-center gap-8 mb-10">
      <h2 className="text-4xl font-bold mb-4 text-white">My Projects</h2>

      <div className="text-white flex flex-col gap-10">
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="w-4xl"
            />
            <p>{project.description}</p>
            <a href={project.link} className="text-purple-500 underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
