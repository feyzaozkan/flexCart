import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080", // 👉 your Kotlin backend URL here
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;