import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/todos";

const Instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default Instance;