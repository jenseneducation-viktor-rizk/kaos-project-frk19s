const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

router.get("/", async (req, res) => {
  const events = fs.createReadStream("db.json");
  events.pipe(res);
});

router.post("/", async (req, res) => {
  db.get("events")
    .push({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      location: req.body.location,
      date: [
        {
          month: req.body.month,
          day: req.body.day,
          time: [
            {
              start: req.body.start,
              end: req.body.end,
            },
          ],
        },
      ],
      tickets: [
        {
          total: req.body.total,
          sold: 0,
        },
      ],
    })
    .write();

  res.send(req.body);
});

module.exports = router;
