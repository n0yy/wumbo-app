import FooterList from "../components/FooterList";

export default function Footer() {
  const ListFooter = [
    {
      id: 1,
      title: "Product",
      data: [
        { name: "Social Feeeds", href: "#" },
        { name: "React UI Kits", href: "#" },
        { name: "Stisla Design", href: "#" },
        { name: "More Products" },
      ],
    },
    {
      id: 2,
      title: "Company",
      data: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Help", href: "#" },
      ],
    },
    {
      id: 3,
      title: "Get In Touch",
      data: [
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Dribble", href: "#" },
      ],
    },
  ];

  return (
    <footer className="mt-36 px-7 lg:px-24 bg-sky-900 text-white pt-10 pb-2">
      <div className="block lg:flex justify-between">
        <div className="w-full lg:w-4/12">
          <img src="./logo.png" alt="Logo Wumbo" className="mb-1" />
          <h6 className="text-lg mb-2">Wumbo</h6>
          <p className="text-xs leading-6 text-gray-200">
            Wumbo is a team of creative developers who have an interest in
            design. We create design templates, UI kits and other products that
            make people's work easier and faster.
          </p>
        </div>

        <div className="flex justify-around space-x-5 w-full ml-0 mt-10 lg:mt-0 lg:ml-24">
          {ListFooter.map((lists) => (
            <FooterList {...lists} />
          ))}
        </div>
      </div>
      <hr className="text-gray-400 my-2 lg:my-5" />
      <h6 className="text-xs text-center text-gray-400 py-1 lg:py-3">
        COPYRIGHT © 2022 - DESIGN NAUVAL | Builded by Syncr0nate
      </h6>
    </footer>
  );
}
