export default function Button({ text, bgcolor, href, target }) {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <a
      role="button"
      href={href}
      target={target}
      rel={rel}
      className={`${bgcolor} hover:bg-opacity-70 duration-300 text-center text-white inline-block mt-2 py-2 rounded-full shadow uppercase`}
    >
      {text}
    </a>
  );
}
