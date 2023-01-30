import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Project from "../../components/Project";
import Skills from "../../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="scrollbar-track-gray400/20 z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-gradient-to-b from-[#28045a] to-[#15162c] text-white scrollbar scrollbar-thumb-[#2a1a42]">
      <Head>
        <title>Quentin Daems - FrontEnd WebDev</title>
        <meta
          name="description"
          content="Quentin Daems Portofolio, NextJs - TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Project />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="item-center flex justify-center">
            <img
              className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
              src="/qdaems500.jpeg"
              alt="heroback"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

{
  /* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hi 👋 Im Quentin,{" "}
            <span className="text-[hsl(280,100%,70%)]">FrontEnd</span> WebDev
          </h1>
        </div>
      </main> */
}
