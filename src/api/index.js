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


async function addNewEvent({newEventObject}) {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4();
    const event = newEventObject.push(`id: ${id}`)

    try {
        const res = await api.post('/',{event})
        const data = res.data.events;
        return data
    } catch (error) {
        console.log(error, 'error in posting new event')
      }
}


async function boughtTicket(boughTicket) {
    try {
        const res = await api.post('/incrementTicket',
            {boughTicket})
        const data = res.data.events;
        return data
    } catch (error) {
        console.log(error, 'error in post bought ticket')
      }
}

async function fetchNewId(){
    try {
        const res = await api.get('/uuid')
        
        return res
    } catch (error) {
            console.log(error, 'error getting uuid')
        }
}

export {fetchEvents, addNewEvent, boughtTicket, fetchNewId}