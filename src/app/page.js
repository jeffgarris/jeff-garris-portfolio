import Header from "./components/Header";
import Title from "./components/Title";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

// Icons
import {
    FaReact,
    FaHtml5,
    FaJsSquare,
    FaVuejs,
    FaGitAlt
  } from "react-icons/fa";
  import { SiNextdotjs, SiJquery, SiTailwindcss, SiSass, SiVercel } from "react-icons/si";
  
const technologies = [
    { icon: FaJsSquare, color: "#F7DF1E", label: "JavaScript" },
    { icon: SiJquery, color: "#0769AD", label: "jQuery" },
    { icon: FaHtml5, color: "#E34F26", label: "HTML5" },
    { icon: SiSass, color: "#CC6699", label: "SCSS" },
    { icon: FaReact, color: "#61DAFB", label: "React" },
    { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
    { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
    { icon: FaVuejs, color: "#42B883", label: "Vue.js" },
    { icon: FaGitAlt, color: "#F05032", label: "Git" },
    { icon: SiVercel, color: "#000000", label: "Vercel" },
];

export default function Home() {
  return (
    <div className="bg-zinc-900 to-zinc-900 min-h-screen">
      <main className="max-w-content mx-auto px-4 py-8 font-sans">
        <Header />        
        <Technologies technologies={technologies} />
        <Projects />
        <Jobs />
      </main>
      <Footer technologies={technologies} />
    </div>
  );
}
