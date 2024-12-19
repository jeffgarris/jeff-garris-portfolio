import Button from "./Button";

export default function Header() {
  return (
    <header className="mt-8">
      <div className="flex">
        <img
          src="https://jeffgarris.com/images/jeff-garris-headshot.jpg"
          className="w-40 h-40 rounded-full"
        ></img>
        <div className="px-4">
          <h1 className="text-8xl text-white font-bold uppercase">
            Jeff Garris
          </h1>
          <h2 className="text-2xl text-white uppercase tracking-widest">
            Frontend Web Developer
          </h2>
          <p className="py-4 text-gray-400 text-md">
            Frontend Web Developer with over 15 years of experience; including
            new builds, redesigns, maintenance, and custom solutions. Passionate
            about intuitive and efficient user flows and functionality. Thrives
            in a collaborative environment.
          </p>
          <Button
            text="Resumé"
            target="_blank"
            href="https://jeffgarris.com/jeff-garris-frontend-web-developer-resume.pdf"
          ></Button>
        </div>
      </div>
    </header>
  );
}
