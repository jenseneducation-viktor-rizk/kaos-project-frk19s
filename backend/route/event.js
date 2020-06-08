const { Router } = require("express");
const router = new Router();
const fs = require("fs");
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// const adapter = new FileSync("db.json");
// const db = low(adapter);

router.get("/", async (req, res) => {
    const events = fs.createReadStream("db.json");
    events.pipe(res)
});

module.exports = router; 