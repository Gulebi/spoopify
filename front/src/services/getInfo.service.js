import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const defaultPlaylistURL = "https://www.youtube.com/playlist?list=PLI3qsl2pruhDW1QnKL6xLe8c06-821r7u";

export default class getInfo {
    async playlistInfo(url = defaultPlaylistURL) {
        return await axios.get(`${API_URL}/api/getPlaylistInfo/?url=${url}`).then((res) => res.data);
    }

    async playlistFullInfo(url = defaultPlaylistURL) {
        return await axios.get(`${API_URL}/api/getPlaylistFullInfo/?url=${url}`).then((res) => res.data);
    }

    async videoInfo(id) {
        return await axios.get(`${API_URL}/api/getPlaylistFullInfo/?id=${id}`).then((res) => res.data);
    }
}
