const useWatchCount = (viewCount) => {
  if (viewCount >= 1e6) {
    return (viewCount / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (viewCount >= 1e4) {
    return (viewCount / 1e3).toFixed(1).replace(/\.0$/, "") + "k";
  } else if (viewCount >= 1e3) {
    return (viewCount / 1e3).toFixed(0) + "k";
  }
  return viewCount.toString();
};

export default useWatchCount;
