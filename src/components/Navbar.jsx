import MenuItem from "./MenuItem";
import { useState } from "react";

export default function Navbar() {
  const menuItems = [
    {
      id: 1,
      name: "Top",
      href: "#top",
    },
    {
      id: 2,
      name: "For Everyone",
      href: "#for-everyone",
    },
    {
      id: 3,
      name: "Features",
      href: "#features",
    },
    {
      id: 4,
      name: "Previews",
      href: "#previews",
    },
    {
      id: 5,
      name: "License",
      href: "#license",
    },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <nav className="py-2 md:py-4 fixed top-0 bg-white/25 backdrop-blur-md shadow-sm px-5 md:px-24 z-20 w-full">
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-2 md:space-x-3 py-1 md:py-0">
            <img
              src="/logo.png"
              alt="Wumbo Logo"
              className="w-10 h-10 md:h-14 md:w-14"
            />
            <p className="font-bold text-sm md:text-lg mt-1.5">Wumbo</p>
          </span>
          <ul className="hidden lg:flex item-center space-x-10 font-extralight text-gray-400">
            {menuItems.map((item) => (
              <MenuItem {...item} />
            ))}
          </ul>
          <a
            className="hidden hover:scale-105 lg:block px-6 py-2 shadow-xl rounded-md text-sm font-bold text-sky-800 bg-white z-20"
            href="https://www.figma.com/downloads/"
          >
            Download
          </a>
        </div>

        {/* For Mobile | MENU ICON*/}
        <button
          className="lg:hidden absolute md:top-8 md:right-20 top-5 right-5"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* OFCANVAS FOR MOBILE */}
        <div
          className={`lg:hidden absolute top-0 transition-all ${
            menuIsOpen ? "right-0 " : "-left-full"
          } min-h-screen w-full bg-sky-600`}
        >
          <ul className="p-10 space-y-7 font-extralight text-white">
            {menuItems.map((item) => (
              <span
                className="block cursor-pointer"
                key={item.id}
                onClick={() => setMenuIsOpen(false)}
              >
                <MenuItem {...item} />
              </span>
            ))}
          </ul>
          <button
            onClick={() => setMenuIsOpen(false)}
            className="absolute top-6 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
