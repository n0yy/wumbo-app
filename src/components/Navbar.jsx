export default function Navbar() {
  return (
    <div className="py-4 flex items-center justify-between fixed inset-x-0 top-0 bg-white/30 backdrop-blur-md shadow-sm px-24 z-20 w-full">
      <span className="flex items-center space-x-3">
        <img src="/logo.png" alt="Wumbo Logo" />
        <p className="font-bold text-lg">Wumbo</p>
      </span>
      <ul className="flex item-center space-x-10 font-extralight text-gray-500">
        <li className="text-gray-800">
          <a href="#">Top</a>
        </li>
        <li>
          <a href="">For Everyone</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Preview</a>
        </li>
        <li>
          <a href="">License</a>
        </li>
      </ul>
      <button className="px-6 py-2 shadow-xl rounded-md text-sm font-bold text-sky-800 bg-white z-20">
        Download
      </button>
    </div>
  );
}
