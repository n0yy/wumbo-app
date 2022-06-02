export default function Navbar() {
  return (
    <div className="py-2 md:py-4 flex items-center justify-between fixed inset-x-0 top-0 bg-white/25 backdrop-blur-md shadow-sm px-5 md:px-24 z-20 w-full">
      <span className="flex items-center space-x-2 md:space-x-3 py-1 md:py-0">
        <img
          src="/logo.png"
          alt="Wumbo Logo"
          className="w-10 h-10 md:h-14 md:w-14"
        />
        <p className="font-bold text-sm md:text-lg mt-1.5">Wumbo</p>
      </span>
      <ul className="hidden md:flex item-center space-x-10 font-extralight text-gray-500">
        <li className="hover:text-gray-300">
          <a href="#">Top</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="#for-everyone">For Everyone</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="#features">Features</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="#preview">Preview</a>
        </li>
        <li className="hover:text-gray-300">
          <a href="">License</a>
        </li>
      </ul>
      <a
        className="hidden hover:scale-105 md:block px-6 py-2 shadow-xl rounded-md text-sm font-bold text-sky-800 bg-white z-20"
        href="https://www.figma.com/downloads/"
      >
        Download
      </a>
    </div>
  );
}
