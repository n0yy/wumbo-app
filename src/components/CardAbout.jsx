const aboutData = [
  {
    id: 1,
    title: "For Designer",
    body: "Busy designers want to share insights, such as tips, tricks or other types of insights. Focus on content not on design.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 16.875V28.125"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.875C16.5533 16.875 17.8125 15.6158 17.8125 14.0625C17.8125 12.5092 16.5533 11.25 15 11.25C13.4467 11.25 12.1875 12.5092 12.1875 14.0625C12.1875 15.6158 13.4467 16.875 15 16.875Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.8438 12.6323C22.6535 10.2126 21.4396 7.0409 21.4441 3.75H8.55591C8.56046 7.04092 7.34652 10.2126 5.15625 12.6323L15 28.125L24.8438 12.6323Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "For Coder",
    body: "Coders who want to share snippets, tools, or tips and tricks. No design skills required: just duplicate, edit and export!",
    icon: (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_32)">
          <path
            d="M10.6458 7.5L2.20834 15L10.6458 22.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0208 7.5L28.4583 15L20.0208 22.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_32">
            <rect
              width="30"
              height="30"
              fill="white"
              transform="translate(0.333344)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "For Marketer",
    body: "Promote the product in an elegant and attractive way to get more attention from potential customers. Just duplicate and export!",
    icon: (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4792 9.375V23.8733C18.4792 24.0276 18.5173 24.1796 18.5901 24.3156C18.6629 24.4517 18.7682 24.5677 18.8967 24.6533L20.1848 25.5121C20.3098 25.5954 20.453 25.6475 20.6023 25.6639C20.7517 25.6803 20.9028 25.6606 21.0429 25.6065C21.183 25.5523 21.3081 25.4652 21.4075 25.3526C21.507 25.24 21.5779 25.1052 21.6143 24.9594L23.1667 18.75"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.1667 18.75C24.4099 18.75 25.6022 18.2561 26.4813 17.3771C27.3603 16.498 27.8542 15.3057 27.8542 14.0625C27.8542 12.8193 27.3603 11.627 26.4813 10.7479C25.6022 9.86887 24.4099 9.37501 23.1667 9.37501H18.4792C18.4792 9.37501 12.0981 9.37501 5.95758 4.2249C5.82101 4.10995 5.65446 4.0364 5.47752 4.01287C5.30057 3.98935 5.12059 4.01684 4.95874 4.09212C4.79688 4.16739 4.65989 4.28732 4.56387 4.43779C4.46784 4.58826 4.41678 4.76303 4.41669 4.94153V23.1835C4.41678 23.362 4.46784 23.5368 4.56387 23.6872C4.65989 23.8377 4.79688 23.9576 4.95874 24.0329C5.12059 24.1082 5.30057 24.1357 5.47752 24.1121C5.65446 24.0886 5.82101 24.0151 5.95758 23.9001C12.0981 18.75 18.4792 18.75 18.4792 18.75H23.1667Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function CardAbout() {
  return aboutData.map((item, index) => {
    return (
      <div
        className="bg-sky-800 hover:bg-sky-900 shadow-xl hover:scale-105 transition duration-200 text-white p-7 w-full lg:w-72 h-full lg:h-64 rounded-lg flex flex-col item-center justify-center"
        key={index}
      >
        <span className="inline-block w-12 p-2 bg-sky-600 rounded-md shadow mb-2">
          {item.icon}
        </span>
        <h3 className="text-gray-50 text-xl font-semibold mb-4">
          {item.title}
        </h3>
        <p className="text-gray-100 font-extralight text-sm tracking-wide">
          {item.body}
        </p>
      </div>
    );
  });
}
