import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default class userService {
    async login(userInfo) {
        return await axios.post(`${API_URL}/api/users/login`, userInfo).then((res) => res.data);
    }

    async signup(userInfo) {
        return await axios.post(`${API_URL}/api/users/signup`, userInfo).then((res) => res.data);
    }

    async getUserInfo(userId) {
        return await axios.get(`${API_URL}/api/users/${userId}`).then((res) => res.data);
    }

    async changeUserInfo(userId, userInfo) {
        return await axios.post(`${API_URL}/api/users/${userId}`, userInfo).then((res) => res.data);
    }

    async addPlaylist(userId, playlistInfo) {
        return await axios.post(`${API_URL}/api/users/addPlaylist/${userId}`, playlistInfo).then((res) => res.data);
    }
}
