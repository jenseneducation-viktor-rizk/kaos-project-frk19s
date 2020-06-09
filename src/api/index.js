import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:9999/api",
});


async function fetchEvents() {
  try {
    const res = await api.get("/events");
    const data = res.data.events;
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error, "error in fetching Event");
    }
}

// fetchEvents()


async function addNewEvent( newEventObject ) {
  const { v4: uuidv4 } = require("uuid");
  // uuid lägger till id i objektet newEventObject.
  // Se nedan vad för data som ska inkluderas i newEventObject för att skapa ett nytt event
  newEventObject.id = uuidv4()
  try {
    return await api.post("/events", newEventObject);

  } catch (error) {
    console.log(error, "error in posting new event");
  }
}



// **** Här är objectet som läggs in i addNewEvent ****

// addNewEvent({
//   name: "test",
//   price: 10,
//   location: "test",
//   month: "test",
//   day: "1",
//   start: "19.00",
//   end: "21.00",
//   total: 100,
//   sold: 0
// })

async function boughtTicket(boughTicket) {
  try {
    const res = await api.post("/incrementTicket", { boughTicket });

    const data = res.data.events;
    return data;
  } catch (error) {
    console.log(error, "error in post bought ticket");
  }
}
 
// Exporterar samtliga functioner som kommunicerar med backend. Ta emot i store
export { fetchEvents, addNewEvent, boughtTicket };
