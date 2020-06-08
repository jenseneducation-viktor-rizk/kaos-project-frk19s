import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:9999/api"
});

async function fetchEvents() {
    const res = await api.get("/event");
    const data = res.data.events
    return data;
}