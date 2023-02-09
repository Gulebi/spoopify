import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

async function getPlaylistInfo(url) {
    axios.get(process.env.BASE_URL + "/api/getPlaylistInfo/" + "?url=" + url);
}

async function getPlaylistFullInfo(url) {
    axios.get(process.env.BASE_URL + "/api/getPlaylistFullInfo/" + "?url=" + url);
}

export { getPlaylistInfo, getPlaylistFullInfo };
