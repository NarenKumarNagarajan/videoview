const usePublishedTime = (publishedAt) => {
  const currentTime = new Date();
  const pastTime = new Date(publishedAt);
  const diffInSeconds = Math.floor((currentTime - pastTime) / 1000);

  if (diffInSeconds < 60) {
    return diffInSeconds + " seconds ago";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return diffInMinutes + " minutes ago";
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return diffInHours + " hours ago";
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return "1 day ago";
  }

  return diffInDays + " days ago";
};

export default usePublishedTime;
