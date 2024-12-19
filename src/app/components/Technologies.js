import Title from "./Title";

export default function Technologies({ technologies }) {
  return (
    <section className="w-full mt-20 space-y-10">
      <Title title="whatcha workin' with?" />
      <div className="flex flex-wrap align-items-center gap-8 mt-8">
        {technologies.map((tech, index) => {
          const { icon: Icon, color, label } = tech;
          return (
            <div key={index} className="flex flex-col items-center">
              <Icon color={color} size="40" />
              <p className="mt-2 text-gray-300">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
