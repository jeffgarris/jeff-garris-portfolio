import Title from "./Title";
import wordCounter from "@public/images/project-word-counter.png";
import doodleGrid from "@public/images/project-doodle-grid.png";
import simon from "@public/images/project-simon.png";
import listr from "@public/images/project-listr.png";

export default function Projects() {
  const projects = [
    {
      image: listr,
      url: "https://listr-silk.vercel.app/",
      title: "Listr",
      description:
        "A full-featured lists app that utilizes local storage and Kinde authentication - built in React.",
    },
    {
      image: wordCounter,
      url: "https://voice-over-script-studio-app.vercel.app",
      title: "Voice Over Script Studio",
      description:
        "A voice over script word counter and analyzer built in Vue 3.",
    },
    {
      image: doodleGrid,
      url: "https://codepen.io/jeffgarris/pen/Zjgvdx",
      title: "Doodle Grid",
      description:
        "A creative app for drawing grid-based designs. Responsive and fun.",
    },
    {
      image: simon,
      url: "https://codepen.io/jeffgarris/pen/RzKZwx",
      title: "Simon",
      description:
        "I rebuilt the classic game of Simon. You know... because what not?",
    },
  ];

  return (
    <section className="mt-12 sm:mt-20">
      <Title title="it's not work if you love it" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 sm:mt-8">
        {projects.map((project, i) => {
          const { image, url, title, description } = project;
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 opacity-90 hover:opacity-100"
            >
              <div className="border rounded-lg overflow-hidden h-[21rem] sm:h-72">
                <div
                  className="w-full h-56 sm:h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                ></div>
                <div className="py-3 px-4">
                  <h3 className="pb-3 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
