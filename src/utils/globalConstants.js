/* ================ Math Values ================ */
export const CAPTCHA_VALUE = Math.floor(1000 + Math.random() * 9000);

export const COOKIE_TIME = 30 / (24 * 60); // 30 minutes in days
/* ================ Math Values ================ */

/* ================ Global Links ================ */
export const DASHBOARD_VIDEOS_LINK =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;
/* ================ Global Links ================ */
