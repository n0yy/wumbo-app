export default function SecondFeatures() {
  return (
    <section>
      <div className="block md:flex items-center flex-row-reverse justify-center mt-24 md:mt-40">
        <div className="space-y-2 w-auto md:w-1/2 tracking-wider">
          <h3 className="text-3xl font-semibold font-dm text-gray-800">
            Design Templates Are Highly Customizable,{" "}
            <span className="underline">it's easy to use!</span>
          </h3>
          <p className="leading-snug text-gray-600">
            All design templates are ready to use, meaning you only need to
            focus on content or if necessary, adjust some properties such as
            color, font, font size and other properties to match your brand.
          </p>
          <ul className="list-decimal ml-5 text-gray-800 space-y-3 pt-3 md:pt-5">
            <li>
              <span className="text-sky-800">Font Family:</span> use your
              favorite font in the design template you choose. Figma has dozens
              of fonts, don't worry about font!
            </li>
            <li>
              <span className="text-sky-800">Colors:</span> adjust the color of
              the template design with the brand you have. Set a solid color or
              gradient, both of which are easy to customize.
            </li>
            <li>
              <span className="text-sky-800">Much More:</span> set more
              properties to suit your desires, all the designs own proportions
              optimized for social media.
            </li>
          </ul>
        </div>
        <div className="space-x-5-2 space-y-2 md:space-y-5 w-1/2 mt-10 md:mt-0">
          <div className="flex items-end gap-1 md:gap-5">
            <img src="/features2.png" alt="Features 2" className="shadow-lg" />
            <img src="/features1.png" alt="Features 1" className="shadow-lg" />
          </div>
          <div className="flex items-start gap-1 md:gap-5 relative">
            <div className="absolute rounded-3xl w-56 h-56 md:w-72 md:h-72 rotate-45 -left-20 -top-56 md:-top-72 bg-gradient-to-b from-sky-400/30 to-sky-300/10 -z-50"></div>
            <div className="absolute rounded-3xl w-56 h-56 md:w-64 md:h-64 rotate-45 left-16 md:-left-20 -top-44 bg-gradient-to-b from-sky-400/20 to-sky-300/5 -z-40"></div>
            <img src="/features3.png" alt="Features 3" className="shadow-lg" />
            <img src="/features4.png" alt="Features 4" className="shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
