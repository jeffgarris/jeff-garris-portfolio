import Button from "./Button";
import Image from "next/image"
import JeffGarrisHeadshot from "@public/images/jeff-garris-headshot.jpg"

export default function Header() {
  return (
    <header className="sm:mt-8">
      <div className="flex flex-col sm:flex-row">
        <Image
          src={JeffGarrisHeadshot}
          quality={50}
          alt="Jeff Garris headshot"
          className="mt-3 w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem] rounded-full"
        />
        <div className="mt-2 sm:mt-0 sm:ml-4">
          <h1 className="text-4xl sm:text-7xl leading-tight text-white font-bold uppercase">
            Jeff Garris
          </h1>
          <h2 className="text-xs sm:text-2xl text-white uppercase tracking-widest">
            Frontend Web Developer
          </h2>
        </div>
      </div>
        
      <div>
        <p className="py-4 text-gray-400 text-sm sm:text-base">
          Frontend Web Developer with over 15 years of experience; including
          new builds, redesigns, maintenance, and custom solutions. Passionate
          about intuitive and efficient user flows and functionality. Thrives
          in a collaborative environment.
        </p>
        <Button
          text="Resumé"
          target="_blank"
          href="/images/jeff-garris-frontend-web-developer-resume.pdf"
        ></Button>
      </div>
    </header>
  );
}
