import CardAbout from "../components/CardAbout";

export default function ForEveryone() {
  return (
    <section className="mt-44 lg:mt-80 relative" id="for-everyone">
      <img src="/bg-about.png" alt="bg" className="absolute top-0 -left-20" />
      <h1 className="text-xl text-center w-full lg:w-1/2 font-semibold mx-auto text-sky-900 tracking-wide mb-10 lg:mb-20 font-dm">
        Figma Social Feeds is designed for everyone. Use for whatever you want,
        it’s completely free!
      </h1>

      <div className="block space-y-3 lg:space-y-0 lg:flex items-center justify-center gap-10">
        <CardAbout />
      </div>
    </section>
  );
}
