const router = require("express").Router();


router.get("/ping", (req, res) => {
    res.json({ Response: "hello world" })
});

router.post("/pong", (req, res) => {
    const request = req.body;
    if (request.ping) {
        res.json(request);
    }
    else {
        res.status(400).json({ Error: "Not Allowed" })
    }
});

module.exports = rout