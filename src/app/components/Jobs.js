export default function Jobs() {
  const jobs = [
    {
      image: "https://jeffgarris.com/images/ryder-logo.png",
      company: "Ryder",
      timeframe: "Nov 2019 - Dec 2024",
      description: "Logistics leader specializing in supply chain solutions",
      role: "Application Developer III",
      responsibilities: [
        "Owned complex features and enhancements in a cross-functional team, including Product Owner, Ops, and Quality Assurance",
        "Worked closely with backend developers to streamline the packing process to update hundreds of identical orders at once, saving both time and money",
        "Completely rebuilt a role-dependent, dynamic site navigation, improving the responsive design and adding 3rd-party search functionality",
        "Ported Ruby on Rails pages to a new, decoupled frontend environment for rebuild and redesign, utilizing APIs for data consumption",
      ],
    },
    {
      image: "https://jeffgarris.com/images/perficient-digital-logo.png",
      company: "Perficient Digital",
      timeframe: "Nov 2015 - Nov 2019",
      description:
        "Global digital consultancy transforming enterprise experiences",
      role: "UI Engineer",
      responsibilities: [
        "Sole frontend engineer for a large, luxury rental properties client, handling maintenance and enhancements, redesign build-outs, custom interactive solutions, and 3rd-party integrations",
        "Worked in a staff augmentation role, adapting to various tools and technologies to support diverse clients and teams",
        "Email template bug fixes and build-outs",
      ],
    },
    {
      image: "https://jeffgarris.com/images/ignite-xds-logo.png",
      company: "Ignite XDS",
      timeframe: "May 2014 - Sep 2015",
      description:
        "Creative agency specializing in digital marketing solutions",
      role: "Frontend Developer",
      responsibilities: [
        "Developed and maintained all dealership and supplemental websites in a local development environment and deployed with Engine Yard or Heroku",
        "Completed full site development, from PSD slicing to deployment and DNS setup",
        "Handled WordPress migration from various hosts to WPengine",
      ],
    },
    {
      image: "https://jeffgarris.com/images/interpolls-logo.png",
      company: "Interpolls",
      timeframe: "Jan 2009 - Feb 2014",
      description: "Innovator in interactive online advertising campaigns",
      role: "Production Engineer/Manager",
      responsibilities: [
        "Oversaw and trained new production engineers on the code and production and QA processes",
        "Created and updated in-house software, allowing for increased productivity and faster turn-around times",
        "Built new ad units to IAB specs from the ground up upon request from a client or publisher",
        "Ensured quality and accuracy in the work done by the design and engineering team",
      ],
    },
  ];

  return (
    <section className="w-full mt-8 space-y-10">
      {jobs.map((job, i) => {
        const {
          image,
          company,
          timeframe,
          description,
          role,
          responsibilities,
        } = job;
        return (
          <div key={i} className="bg-zinc-800 rounded-lg shadow-sm">
            <div className="p-9">
              <img alt={company} className="w-auto h-8 mr-2 mb-2" src={image} />
              <p className="text-lg font-semibold text-white">{timeframe}</p>
              <p className="text-sm text-gray-300">{description}</p>
              <p className="pt-6 text-md text-gray-100">{role}</p>
              <ul>
                {responsibilities.map((responsibility, i) => (
                  <li key={i} className="pt-2 text-gray-400 list-none">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
