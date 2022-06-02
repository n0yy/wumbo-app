export default function Features() {
  return (
    <section
      className="mt-24 md:mt-48 font-dm block md:flex items-center space-x-5"
      id="features"
    >
      <div className="w-full md:w-3/5 space-y-4 mr-20">
        <h3 className="text-3xl font-medium text-gray-800">
          There are{" "}
          <span className="underline text-sky-900 leading-5">
            80+ Pre-Designed
          </span>{" "}
          Templates Ready to Use
        </h3>
        <p className="text-gray-500 tracking-wide">
          time you post. There are 80+ designs with 10+ different layouts. Each
          layout has several designs with the same theme, just need to focus on
          the content!
        </p>
        <ul className="text-gray-700 list-disc ml-5 space-y-2">
          <li>
            <span className="text-sky-700 font-semibold">Insights:</span> create
            content that contains insights on design, coding, or recommendations
            for the best tourist attractions.
          </li>
          <li>
            <span className="text-sky-700 font-semibold">Promotions:</span> get
            more potential customers by making product or service promotions in
            a more attractive way.
          </li>
          <li>
            <span className="text-sky-700 font-semibold">Much More:</span>{" "}
            design more types of content with Social Feeds and increase
            followers on your social media accounts.
          </li>
        </ul>
      </div>

      <div className="w-full relative mt-10 md:mt-0 overflow-hidden">
        <div className="absolute top-0 -right-24 -z-50">
          <img src="/bg-about1.png" alt="bg1" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-5">
          <div className="shadow-2xl">
            <img
              src="/hero2.png"
              alt="hero 2"
              className="w-36 h-36 flex-none"
            />
          </div>
          <div className="shadow-xl ">
            <img
              src="/hero5.png"
              alt="hero 5"
              className="w-56 h-56 shrink-md"
            />
          </div>
          <div className="shadow-xl">
            <img src="/hero4.png" alt="hero 4" className="" />
          </div>
        </div>
        <div className="mt-7 flex justify-center">
          <img src="/hero7.png" alt="hero 7" className="w-64 h-64" />
        </div>
      </div>
    </section>
  );
}
