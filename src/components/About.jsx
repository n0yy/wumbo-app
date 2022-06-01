import CardAbout from "./CardAbout";

export default function About() {
  return (
    <section className="mt-44 relative">
      <img src="/bg-about.png" alt="bg" className="absolute top-0 -left-20" />
      <h1 className="text-xl text-center w-1/2 font-semibold mx-auto text-sky-900 tracking-wide mb-20 font-dm">
        Figma Social Feeds is designed for everyone. Use for whatever you want,
        it’s completely free!
      </h1>

      <div className="flex items-center justify-center gap-10">
        <CardAbout />
      </div>
    </section>
  );
}
