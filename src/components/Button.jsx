export default function Button({ name, urlImage, color, href }) {
  return (
    <a
      href={href}
      className={`flex space-x-2 items-center ${color} py-3 px-6 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl transition duration-200`}
    >
      <img src={urlImage} alt="download" width={20} /> <span>{name}</span>
    </a>
  );
}
