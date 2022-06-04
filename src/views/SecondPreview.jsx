export default function SecondPreview() {
  return (
    <section className="my-24 px-7 sm:px-24 block sm:flex items-center justify-between relative overflow-hidden">
      <div className="space-y-5 w-full sm:w-7/12">
        <h3 className="text-3xl font-semibold tracking-wide">
          Optimized For Posts on{" "}
          <span className="underline">All Social Media</span>: Facebook,
          Instagram & Twitter
        </h3>
        <p className="leading-6 tracking-wide text-gray-700 text-justify">
          The design has an aspect ratio of 1:1 which the majority of social
          media recommends. The image quality is also high (1080 * 1080), you
          can further increase the image quality to 2x or more so that the
          design looks sharper.
        </p>
        <div className="space-y-3">
          <button className="rounded-lg w-full px-10 py-4 bg-sky-500 shadow-2xl flex items-center justify-between text-white font-semibold shadow-sky-200">
            <span>Preview For Instagram</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
          <button className="rounded-lg w-full px-10 py-4 flex items-center justify-between font-semibold">
            <span>Preview For Facebook</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
          <button className="rounded-lg w-full px-10 py-4 flex items-center justify-between font-semibold">
            <span>Preview For Twitter</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="shadow-2xl mb-20">
          <img src="./forIg.png" alt="For Instagram" className="sm:w-[300px]" />
        </div>
        {/* bg */}
        <div className="w-72 h-72 sm:w-80 sm:h-80 absolute bg-gradient-to-b from-sky-300/20 to-sky-200/10 rounded-full bottom-48 sm:top-36 -right-24 -z-50"></div>
      </div>
    </section>
  );
}
