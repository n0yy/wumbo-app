import Button from "../components/Button";

export default function Heroes() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between font-dm">
      <div className="w-full lg:w-2/5 space-y-5 z-10 lg:z-0 mb-24">
        <h1 className="text-4xl lg:text-5xl text-sky-900 font-light leading-tight">
          Beautiful Design For{" "}
          <span className="font-extrabold underline">Social Media</span> Content
        </h1>
        <p className="text-gray-500 font-thin text-justify">
          Figma social media content templates for branding, marketing,
          insights, and more. Free for personal and commercial use!
        </p>
        <div className="flex items-center space-x-5">
          <Button
            name="Download Now!"
            urlImage="/download.png"
            color="bg-sky-500 text-white"
            href="https://www.figma.com/downloads/"
          />
          <Button
            name="See Action"
            urlImage="/play-circle.png"
            color="bg-white text-sky-700"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 z-10 relative">
        {/* background */}

        <span className="hidden lg:block absolute -z-10 -top-20 -right-24">
          <img
            src="/bg-hero.png"
            alt="background"
            className="min-h-screen w-fit"
          />
        </span>

        <div className="flex items-end gap-3">
          <img
            src="/hero2.png"
            alt="hero 1"
            className="w-20 h-20 sm:w-36 sm:h-36"
          />
          <img src="/hero5.png" alt="hero 2" />
          <img src="/hero3.png" alt="hero 3" className="hidden lg:block" />
        </div>
        <div className="flex items-start gap-3">
          <img
            src="/hero1.png"
            alt="hero 4"
            className="w-44 sm:w-64 h-44 sm:h-64"
          />
          <img
            src="/hero4.png"
            alt="hero 5"
            className="w-28 lg:w-40 h-28 lg:h-40"
          />
        </div>
      </div>
    </section>
  );
}
