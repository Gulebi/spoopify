const express = require("express");
const ytdl = require("ytdl-core");
const ysr = require("youtube-sr").default;

const router = express.Router();

router.get("/getPlaylistInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url } = req.body;

        ysr.getPlaylist(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.error(error);
    }
});

router.get("/getPlaylistFullInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url } = req.body;

        ytdl.getInfo(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.error(error);
    }
});

router.get("/getVideoFullInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url } = req.body;

        ytdl.getInfo(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((e) => console.log(e));
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
