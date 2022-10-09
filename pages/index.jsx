import Head from "next/head";
import Navbar from "../components/portofolio/Navbar";
import About from "../components/portofolio/About";
import Contact from "../components/portofolio/Contact";
import Main from "../components/portofolio/Main";
import Projects from "../components/portofolio/Projects";
import Skills from "../components/portofolio/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lutv | Full Stack Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
