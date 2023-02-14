const express = require("express");
const { UserModel } = require("../Models");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");

        UserModel.find({}, (err, users) => {
            if (err) return res.status(500).send({ message: "Error" });
            else return res.status(200).send({ message: "Success", data: users });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { id } = req.params;

        UserModel.findById(id, (err, user) => {
            if (err) return res.status(500).send({ message: "Error" });
            else return res.status(200).send({ message: "Success", data: user });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { login, password } = req.body;

        UserModel.findOne({ login }, (err, user) => {
            if (err) return res.status(500).send({ message: "Error" });
            else if (user === null) return res.status(404).send({ message: "Not Found" });
            else {
                if (user?.password === password) {
                    return res.status(200).send({ message: "Success", data: user._id });
                } else return res.status(400).send({ message: "Incorrect Password" });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.post("/signup", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { name, surname, login, password } = req.body;
        const newUser = new UserModel({ name, surname, login, password });

        newUser.save((err) => {
            if (err) return res.status(500).send({ message: "Error" });
            else return res.status(201).send({ message: "Success" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.post("/addPlaylist", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { userId, playlistId } = req.body;

        const user = await UserModel.findById(userId);

        user.playlists.push(playlistId);

        user.save((err) => {
            if (err) return res.status(500).send({ message: "Error" });
            else return res.status(201).send({ message: "Success" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

router.post("/deletePlaylist", async (req, res) => {
    try {
        res.set("Content-Type", "application/json");
        const { userId, playlistId } = req.body;

        const user = await UserModel.findById(userId);

        user.playlists = user.playlists.filter((id) => id != playlistId);

        user.save((err) => {
            if (err) return res.status(500).send({ message: "Error" });
            else return res.status(201).send({ message: "Success" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error" });
    }
});

module.exports = router;
