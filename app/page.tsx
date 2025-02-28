"use client";

import { navItems } from "@/app/data";
import Hero from "@/app/sections/Hero";
import Grid from "@/app/sections/Grid";
import Footer from "@/app/sections/Footer";
import Experience from "@/app/sections/Experience";
import RecentProjects from "@/app/sections/RecentProjects";
import { FloatingNav } from "@/app/sections/components/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
