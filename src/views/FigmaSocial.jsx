export default function FigmaSocial() {
  return (
    <section className="px-7 sm:px-24 relative block lg:flex flex-row-reverse justify-between items-center">
      <div className="space-y-5">
        <h3 className="text-3xl tracking-wide">
          Figma Social Feeds is Free For{" "}
          <span className="underline text-sky-800">Personal</span> or{" "}
          <span className="underline text-sky-800">Commercial</span>
          Use.
        </h3>
        <p className="text-gray-700 leading-7 text-justify">
          Figma Social Feeds is licensed under CC BY 4.0, which means you are
          free to use template designs for personal or commercial purposes with
          attribution to the template design creator.
        </p>
        <ul className="text-sm space-y-2">
          <li>
            <p className="flex items-start space-x-2 text-gray-700">
              <img src="./check.svg" alt="" />
              <span>Design content for products to be sold</span>
            </p>
          </li>
          <li>
            <p className="flex items-start space-x-2 text-gray-700">
              <img src="./check.svg" alt="" />
              <span>Design content to offer services</span>
            </p>
          </li>
          <li>
            <p className="flex items-start space-x-2 text-gray-700">
              <img src="./check.svg" alt="" />
              <span>
                Create product that include Social Feeds as features in it
              </span>
            </p>
          </li>

          <li>
            <p className="flex items-start space-x-2 text-gray-700">
              <img src="./close.svg" alt="" />
              <span>
                Create design generator tool that include Social Feeds
              </span>
            </p>
          </li>
          <li>
            <p className="flex items-start space-x-2 text-gray-700">
              <img src="./close.svg" alt="" />
              <span>Resell it without making significant changes</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-14 w-full shadow-xl sm:mr-20">
        <img src="./figmaSocial.png" alt="" />
        <div className="absolute left-0 top-3/4 sm:top-1/2 -z-50">
          <svg
            className="w-72"
            viewBox="0 0 525 497"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H306.736C318.728 0 329.568 7.14101 334.301 18.159L522.026 455.159C530.531 474.958 516.01 497 494.462 497H0V0Z"
              fill="#EFF3FA"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
