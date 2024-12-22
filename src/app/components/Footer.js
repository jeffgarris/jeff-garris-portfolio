export default function Footer({ technologies }) {
  const technologiesUsed = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Git",
    "Vercel"
  ];
  return (
    <footer className="flex flex-col items-center sm:flex-row max-w-content mt-20 mx-auto px-8 sm:px-4 py-8 text-center text-gray-500">
      <p className="text-left">&copy; {new Date().getFullYear()} Jeff Garris.</p>
      <p className="mt-2 sm:mt-0 sm:ml-1 text-left text-nowrap">Built and deployed with</p>
      <div className="flex flex-wrap align-items-center gap-2 ml-2">
          {technologies
            .filter(({ label }) => technologiesUsed.includes(label))
            .map((tech, index) => {
              const { icon: Icon, name, color, label } = tech;
              return (
                <div
                  key={index}
                  className="flex"
                  title={label}
                >
                  <Icon color={color} size="20" />
                </div>
              );
            })}
        </div>
    </footer>
  );
}
