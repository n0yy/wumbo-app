import Button from "../components/Button";

export default function Download() {
  return (
    <section className="px-7 sm:px-24 mt-64 flex justify-center">
      <div className="space-y-3 text-center">
        <a
          href="#"
          className="px-3 py-1 rounded-full text-sm bg-sky-200 text-sky-800"
        >
          Download
        </a>
        <h3 className="text-xl">
          Download Figma{" "}
          <span className="underline text-sky-500">Social Feeds</span> Now
        </h3>
        <p className="text-justify text-gray-700">
          Figma Social Feeds is free for everyone, create content for promotion,
          share insights and get creative on the internet.
        </p>

        <div className="pt-5 flex space-x-2">
          <a
            href="https://www.figma.com/download"
            className="flex bg-sky-600 rounded-lg shadow-xl shadow-sky-600/20 w-full py-3 px-5 text-white sm:space-x-5 items-center justify-center"
          >
            <img src="./download.png" alt="" />
            <span className="text-xs sm:text-base">Download Now!</span>
          </a>
          <a
            href=""
            className="flex bg-sky-500 rounded-lg shadow-xl shadow-sky-500/20 w-full py-3 px-5 text-white space-x-2 sm:space-x-5 items-center justify-center"
          >
            <span className="text-xs sm:text-base">Say Thanks!</span>
            <img src="./twitter.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
