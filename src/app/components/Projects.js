export default function Projects() {
  const projects = [
    {
      image: "https://jeffgarris.com/images/project-word-counter.png",
      url: "https://codesandbox.io/p/sandbox/zen-meadow-5hx8vg",
      title: "Word Counter",
      description: "Enter your script and get the word, character, etc. count.",
    },
    {
      image: "https://jeffgarris.com/images/project-doodle-grid.png",
      url: "https://codepen.io/jeffgarris/pen/Zjgvdx",
      title: "Doodle Grid",
      description:
        "A creative app for drawing grid-based designs. Responsive and fun.",
    },
    {
      image: "https://jeffgarris.com/images/project-simon.png",
      url: "https://codepen.io/jeffgarris/pen/RzKZwx",
      title: "Simon",
      description:
        "I rebuilt the classic game of Simon. You know... because what not?",
    },
    {
      image: "https://jeffgarris.com/images/project-pattern-game.png",
      url: "https://codepen.io/jeffgarris/pen/GRdxOMy",
      title: "Pattern Game",
      description:
        "Memorize the pattern before it vanishes. Now try to recreate it.",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-4 mt-8">
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
            <div className="border rounded-lg shadow-sm overflow-hidden h-80">
              <div
                className="w-full h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
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
    </section>
  );
}
