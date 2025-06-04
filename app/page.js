import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NavLink from "./components/NavLink";
import AboutSection from "./components/AboutSection";
import MyProjects from "./components/MyProjects";
import Contacts from "./components/Contacts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <MyProjects />
        <Contacts />
        <NavLink />
      </div>
    </main>
  );
}
