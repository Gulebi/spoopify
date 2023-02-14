import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const defaultURL = "https://www.youtube.com/watch?v=J2kGYnv5qRI";

export default class fileService {
    async downloadFileFromURL(url = defaultURL) {
        return await axios.get(`${API_URL}/api/getAudioFile/?url=${url}`).then((res) => res.data);
    }

    async downloadFileFromID(id) {
        return await axios.get(`${API_URL}/api/getAudioFile/?id=${id}`).then((res) => res.data);
    }
}
