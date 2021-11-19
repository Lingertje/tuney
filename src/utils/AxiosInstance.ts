import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 4000,
    headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    }
});

export default instance;
