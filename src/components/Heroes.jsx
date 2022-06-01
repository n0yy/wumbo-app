import Button from "./Button";

export default function Heroes() {
  return (
    <section className="flex items-center justify-between font-dm">
      <div className="w-2/5 space-y-5">
        <h1 className="text-5xl text-sky-900 font-light leading-tight">
          Beautiful Design For{" "}
          <span className="font-extrabold underline">Social Media</span> Content
        </h1>
        <p className="text-gray-500 font-thin">
          Figma social media content templates for branding, marketing,
          insights, and more. Free for personal and commercial use!
        </p>
        <div className="flex items-center space-x-5">
          <Button
            name="Download Now!"
            urlImage="/download.png"
            color="bg-sky-500 text-white"
          />
          <Button
            name="See Action"
            urlImage="/play-circle.png"
            color="bg-white text-sky-700"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 z-10">
        {/* background */}

        <img
          src="/bg-hero.png"
          alt="background"
          className="absolute -z-10 h-full top-0 right-0"
        />

        <div className="flex items-end gap-3">
          <img src="/hero2.png" alt="hero 1" className="w-36 h-36" />
          <img src="/hero5.png" alt="hero 2" />
          <img src="/hero3.png" alt="hero 3" />
        </div>
        <div className="flex items-start gap-3">
          <img src="/hero1.png" alt="hero 4" className="w-64 h-64" />
          <img src="/hero4.png" alt="hero 5" className="w-40 h-40" />
        </div>
      </div>
    </section>
  );
}
