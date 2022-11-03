import axios from "axios";

const KEY = "AIzaSyARdJXr2fqIV5nTT2i_An5PpuyBHTjdNls";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});