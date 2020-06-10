import axios from "axios";
const { v4: uuidv4 } = require("uuid");

const api = axios.create({
  baseURL: "http://localhost:9999/api",
});


async function fetchEvents() {
  try {
    const res = await api.get("/events");
    const data = res.data.events;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, "error in fetching Event");
  }
}

// **** Adds the event and then returns the added object
async function addNewEvent(newEventObject) {
  // uuid lägger till id i objektet newEventObject.
  // Se nedan vad för data som ska inkluderas i newEventObject för att skapa ett nytt event
  newEventObject.id = uuidv4();
  try {
    const res = await api.post("/admin", newEventObject);
    const data = res.data
    return data
  } catch (error) {
    console.log(error, "error in posting new event");
  }
}

// **** skicka med eventet som köps.
// I backend returnerar eventet plus biljettnummer
async function buyTicket(event) {
  event.ticketNr = uuidv4()
  try {
    const res = await api.post("/buy", event);
    const data = res.data
    return data
  } catch (error) {
    console.log(error, "error in post buy ticket");
  }
}

// Skicka textsräng med biljettnummer
// ** Returnerar true om biljett finns i databasen och false om den inte finns
async function verifyTicket(ticketNumber) {
  let testNr = {
    id: ticketNumber
  }
  try {
    const res = await api.post("/staff/verify", testNr);
    const data = res.data
    console.log(data)
    return data
  } catch (error) {
    console.log(error, "error in veryfying ticket");
  }
}

//! TO TEST BUYTICKET FUNCTION
// buyTicket({hej: "test", id: 1, tickets: 
//   {sold: 125}
// })

//! TO TEST ADDNEWEVENT
// addNewEvent({name: "hej"})

//! TO TEST FETCHEVENT
// fetchEvents();

// !TO TEST VERIFY TICKET
// verifyTicket("592624a0-3f1a-4499-96a4-d1f5d26ddb47")



// Exporterar samtliga functioner som kommunicerar med backend. Ta emot i store
export { fetchEvents, addNewEvent, buyTicket, verifyTicket };
