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
    try {
        const res = await api.post('/',
            {newEventObject})
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
        const data = res.notwrittenyet.notwrittenyet
        return data
    } catch (error) {
        console.log(error, 'error getting uuid')
    }
}

export {fetchEvents, addNewEvent, boughtTicket, fetchNewId}