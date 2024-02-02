const GOOGLE_API_KEY ="AIzaSyDRxGK4y7fKmwdpGCiMLNi8fFNxCnQ3iIc";
export const OFFSET_LIVE_CHAT = 15;
export const USER_IMAGE = "https://avatars.githubusercontent.com/u/75747452?v=4";
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?type=video&regionCode=IN&part=snippet&maxResults=25&key="+GOOGLE_API_KEY+"&q=";
export const YOUTUBE_SEARCH_API = "https://corsproxy.org/?http%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q=";
export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&key="+GOOGLE_API_KEY+"&videoId=";
export const YOUTUBE_VIDEO_CATEGORY ="https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=IN&key="+GOOGLE_API_KEY;
// export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+GOOGLE_API_KEY+"&q=";