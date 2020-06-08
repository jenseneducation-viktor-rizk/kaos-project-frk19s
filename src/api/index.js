import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:9999/api"
});

async function fetchEvents() {
    try {
        const res = await api.get("/");
        const data = res.data.events
        return data;
    } catch (error) {
        console.log(error, 'error in fetching Event')
      }
}

async function addNewEvent() {
    try {
        const res = await api.post('/',
            {     
                name: empty, 
                where: empty, 
                date: empty, 
                timefrom: empty, 
                timeTo: empty, 
                Price: empty
            })
        const data = res.data.events;
        return data
    } catch (error) {
        console.log(error, 'error in posting new event')
      }
}

async function boughtTicket() {
    try {
        const res = await api.post('/incrementTicket',
            { increment: ticket })

        const data = res.data.events;
        return data
    } catch (error) {
        console.log(error, 'error in post bought ticket')
      }
}

export {fetchEvents, addNewEvent, boughtTicket}