/* ================ Math Values ================ */
export const CAPTCHA_VALUE = Math.floor(1000 + Math.random() * 9000);

export const COOKIE_TIME = 30 / (24 * 60); // 30 minutes in days
/* ================ Math Values ================ */

/* ================ Global Links ================ */
export const DASHBOARD_VIDEOS_LINK =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const SEARCH_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHANNEL_DETAIL_LINK =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&id=";

export const SEARCH_RESULT_LINK =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&q=";

export const VIDEO_COMMENTS_LINK =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&videoId=";

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
    "kumar",
    "Gayathri",
    "Subbu",
    "Nagu",
    "Ponnu",
    "Balu",
    "Jayanthi",
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
  const messages = [
    "Great video! 👍😊",
    "Love this content! ❤️👏",
    "This is so amazing! 😍",
    "Can you do more? 🙌",
    "Best video ever! 🌟👏",
    "Thanks for the upload! 🙏",
    "Incredible video! 🎉💯",
    "What a fantastic stream! 🎥",
    "This is so funny! 😂",
    "Awesome content! Keep it up! 🚀",
    "Great job on this! 👍",
    "Absolutely loved this video! 😄",
    "Can’t wait for next one! ⏳",
    "You’re doing great! 💪",
    "This is gold! 🌟✨",
    "Loved every minute of it! 😃",
    "Thanks for the great content! 🙏",
    "So entertaining! 🥳👏",
    "Best video I've seen! 👏",
    "Fantastic work as always! 🌟",
    "Great stuff!",
    "Very informative.",
    "Loved the explanation.",
    "Nice work.",
    "Keep it up!",
    "Superb!",
    "Well done.",
    "Impressive!",
    "Good job.",
    "Excellent!",
    "So cool!",
    "Amazing work!",
    "Fantastic video!",
    "Really helpful!",
    "This is awesome!",
    "Brilliant!",
    "Outstanding!",
    "Top-notch!",
    "Very well done!",
    "Super helpful!",
    "Great insights!",
    "Loved it!",
    "Very entertaining.",
    "So much fun!",
    "Really enjoyed this.",
    "Amazing content!",
    "Very nice.",
    "Pure genius!",
    "Exceptional!",
    "Highly recommended!",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

/* ================ dummy Data ================ */
