import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9999/api",
});

async function fetchEvents() {
  try {
    const res = await api.get("/events");
    const data = res.data.events;
    return data;
  } catch (error) {
    console.log(error, "error in fetching Event");
  }
}

async function addNewEvent({ newEventObject }) {
  const { v4: uuidv4 } = require("uuid");
  const event = {
    id: uuidv4(),
    newEventObject,
  };
  try {
    const res = await api.post("/events", event);
    const data = res.data.events;
    return data;
  } catch (error) {
    console.log(error, "error in posting new event");
  }
}

async function boughtTicket(boughTicket) {
  try {
    const res = await api.post("/incrementTicket", { boughTicket });

    const data = res.data.events;
    return data;
  } catch (error) {
    console.log(error, "error in post bought ticket");
  }
}

export { fetchEvents, addNewEvent, boughtTicket };
