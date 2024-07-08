/* ================ Math Values ================ */
export const CAPTCHA_VALUE = Math.floor(1000 + Math.random() * 9000);

export const COOKIE_TIME = 30 / (24 * 60); // 30 minutes in days
/* ================ Math Values ================ */

/* ================ Global Links ================ */
export const DASHBOARD_VIDEOS_LINK =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const SEARCH_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

/* ================ Global Links ================ */

/* ================ dummy Data ================ */

export const commentsData = [
  {
    name: "Naren Kumar N",
    text: "level 1 comment",
    replies: [
      {
        name: "Gayathri",
        text: "level 2 comment",
        replies: [],
      },
      {
        name: "Gayathri",
        text: "level 2 comment",
        replies: [],
      },
    ],
  },
  {
    name: "Naren Kumar N",
    text: "level 1 comment",
    replies: [],
  },
  {
    name: "Naren Kumar N",
    text: "level 1 comment",
    replies: [
      {
        name: "Gayathri",
        text: "level 2 comment",
        replies: [
          {
            name: "Nagarajan",
            text: "level 3 comment",
            replies: [
              {
                name: "Subbu",
                text: "level 4 comment",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Gayathri",
        text: "level 2 comment",
        replies: [],
      },
    ],
  },
  {
    name: "Naren Kumar N",
    text: "level 1 comment",
    replies: [
      {
        name: "Gayathri",
        text: "level 2 comment",
        replies: [
          {
            name: "Ponnu",
            text: "level 3 comment",
            replies: [
              {
                name: "Baulsamy",
                text: "level 4 comment",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Naren Kumar N",
    text: "level 1 comment",
    replies: [],
  },
];

export const nameGenerate = () => {
  const nameList = [
    "Gayathri",
    "Subbu",
    "Ponnu",
    "Balu",
    "Jayanthi",
    "Harini",
    "Liya",
    "Drona",
    "Raja",
    "Arun",
    "Sathya",
    "Manickam",
    "Prasanth",
    "Kutta",
    "Rahul",
    "Singam",
    "Samuel",
    "Rohan",
    "Thivakar",
    "Mani",
    "Shyam",
    "Pandi",
    "Bala",
    "Moorthy",
  ];
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const messageGenerate = () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 20) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

/* ================ dummy Data ================ */
