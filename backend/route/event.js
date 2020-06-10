const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const adapter2 = new FileSync("tickets/tickets.json")
const eventDb = low(adapter2)
const db = low(adapter);

router.get("/events", async (req, res) => {
  const events = fs.createReadStream("db.json");
  events.pipe(res);
});

router.post("/admin", async (req, res) => {
  console.log(req.body, "object from Frontend");
  db.get("events")
    .push({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      location: req.body.location,
      date: 
        {
          month: req.body.month,
          day: req.body.day,
          time: 
            {
              start: req.body.start,
              end: req.body.end,
            },
          
        },
      tickets: 
        {
          total: req.body.total,
          sold: 0,
        },     
    })
    .write();

  res.send(req.body);
});

// Gen
// Frontend post fungerar inte. Denna kod måste också ändras en hel del!
router.post("/buy", async (req, res) => {
  eventDb.get("tickets")
    .push(req.body)
    .write();

  db.get("events")
    .find({ id: req.body.id })
    .get('tickets')
    .find('sold')
    .assign({ sold: req.body.tickets.sold + 1 })
    .write();
    
    res.send(req.body);
    
});

module.exports = router;
