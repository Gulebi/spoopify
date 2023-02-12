const express = require("express");
const ytdl = require("ytdl-core");
const ysr = require("youtube-sr").default;

const router = express.Router();

router.get("/getPlaylistInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url } = req.query;

        ysr.getPlaylist(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send({ message: "Error" });
            });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.get("/getPlaylistFullInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url } = req.query;

        ytdl.getInfo(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send({ message: "Error" });
            });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.get("/getVideoInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url, id } = req.query;

        if (id) url = `https://www.youtube.com/watch?v=${id}`;

        ysr.getVideo(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send({ message: "Error" });
            });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.get("/getVideoFullInfo", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { url } = req.query;

        ytdl.getInfo(url)
            .then((info) => {
                return res.status(200).send({ message: "Success", data: info });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send({ message: "Error" });
            });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

module.exports = router;
