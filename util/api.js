import axios from "axios";
// const apiUrl = process.env.NODE_ENV ? process.env.DEV_API_URL : process.env.PROD_API_URL;
const apiUrl = "http://localhost:5000/api"
// const apiUrl = "http://sneakerxwars.com/api"

/* Common API */

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error.response)
    }
);

/* Auth API */

const authApi = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

authApi.interceptors.request.use(
    (config) => {
        if (!config.withoutAuth) {
            config.headers.Authorization = `token ${window.localStorage.getItem("token")}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error.response)
    }
);

authApi.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error.response)
    }
);

export { api, authApi }
