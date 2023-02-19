const express = require("express");
const ytdl = require("ytdl-core");
const ysr = require("youtube-sr").default;

const router = express.Router();

router.get("/getAudioFile", async (req, res) => {
    try {
        let { url, id } = req.query;

        if (id) url = `https://www.youtube.com/watch?v=${id}`;

        ysr.getVideo(url)
            .then((info) => {
                res.attachment(`${info.title}.mp3`);
                ytdl(url, { filter: "audioonly", dlChunkSize: 0, quality: "highestaudio" }).pipe(res);
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

router.get("/getAudioStream", async (req, res) => {
    try {
        let { url, id } = req.query;

        if (id) url = `https://www.youtube.com/watch?v=${id}`;

        ysr.getVideo(url)
            .then((info) => {
                ytdl(url, { filter: "audioonly", dlChunkSize: 0, quality: "highestaudio" }).pipe(res);
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
