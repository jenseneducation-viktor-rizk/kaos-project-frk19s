const express = require("express");
const app = express();
const port = process.env.PORT || 9999;
const cors = require("cors");
const eventRouter = require("./route/event");

app.use(cors());
app.use(express.json());
app.use("/api/events", eventRouter);

app.listen(port, () => console.log(`Server started on port: ${port}`));
