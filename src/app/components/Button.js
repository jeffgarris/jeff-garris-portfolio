export default function Button({ text, href, target }) {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <a
      role="button"
      href={href}
      target={target}
      rel={rel}
      className="inline-block mt-2 px-12 py-2 bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 uppercase"
    >
      {text}
    </a>
  );
}
