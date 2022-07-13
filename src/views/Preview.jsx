export default function Preview() {
  return (
    <section id="previews" className="md:p-10 bg-sky-900 md:mt-20">
      <header className="p-7 flex flex-col items-center justify-center space-y-3 md:space-y-5">
        <button className="px-6 py-1 md:py-1.5 rounded-full bg-sky-800 text-sky-500">
          Preview
        </button>
        <p className="text-xl md:text-2xl w-full md:w-1/2 text-white leading-5 md:leading-8 text-center">
          Social Feeds is a{" "}
          <span className="underline">Figma design template</span>, and everyone
          can use Figma!
        </p>
      </header>
      <div className="flex items-center justify-center">
        <img src="/preview.png" alt="preview" />
      </div>
      <div>
        <p className="p-7 text-center text-gray-100 tracking-wide text-xs sm:text-lg  -mt-10">
          Like the demo above, you can use Social Feeds with ease, just need to
          duplicate the template design you want, design the content, and
          export!
        </p>
      </div>
    </section>
  );
}
