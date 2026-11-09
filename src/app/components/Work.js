import Title from "./Title";
import UDRCommunityMap1 from "@public/images/udr-community-map-1.gif";
import UDRCommunityMap2 from "@public/images/udr-community-map-2.gif";
import UDRApartmentsResponsive from "@public/images/udr-responsive-apts-layout.gif";

export default function Projects() {
  const projects = [
    {
      image: UDRCommunityMap1,
      url: "https://www.udr.com/orange-county-apartments/huntington-beach/the-residences-at-pacific-city/apartments-pricing/interactive/#/?layers=0,1",
      title: "UDR Community Map - Style 1",
      description:
        "An interactive apartment community map, complete with modals, scrolling animation, slide-out details panel, and slideshow with photos and integrated Matterport 3D walk-throughs. ",
    },
    {
      image: UDRCommunityMap2,
      url: "https://www.udr.com/los-angeles-apartments/santa-monica/junction-santa-monica/apartments-pricing/interactive/#/?layers=0,1&floor-number=1",
      title: "UDR Community Map - Style 2",
      description:
        "An interactive apartment building and floor plans map, complete with modals, scrolling animation, slide-out details panel, and slideshow with photos and integrated Matterport 3D walk-throughs. ",
    },
    {
      image: UDRApartmentsResponsive,
      url: "https://www.udr.com/orange-county-apartments/huntington-beach/the-residences-at-pacific-city/apartments-pricing/#/?hometypes=penthouse",
      title: "UDR Responsive Layout",
      description:
        "A mobile-first responsive apartment listing page with expandable/collapsable lists and different apartment filters configurations",
    }
  ];

  return (
    <section className="mt-12 sm:mt-20">
      <Title title="Work Examples" />
      <div className="grid gap-8 sm:mt-4">
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
              <div className="overflow-hidden">
                <div className="py-3">
                  <h3 className="pb-3 text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-lg text-gray-300">{description}</p>
                </div>
                <div
                  className="w-full h-[30rem] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${image.src})` }}
                ></div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
