import axios from "axios";


const Instance = () => {
    const BASE_URL = "http://localhost:8080/api/v1/todos";

    const axiosAPI = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    })

    const authAxiosAPI = axios.create({
        baseURL: BASE_URL + "?offset=0&limit=50",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return { axiosAPI, authAxiosAPI }
}


export default Instance;