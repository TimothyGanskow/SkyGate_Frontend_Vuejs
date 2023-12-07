import axios from "axios";
import { refreshToken } from "../fetch/fetchToken";

/* axios interceptor for passing default header and using deault url */

axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL;

/* interceptor for the request always pass a header when sessionToken exists -> else error */
axios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('session');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

/* When the sessionToken is expired or invalid, interceptor reponse send a request to refreshToken to get a new sessiontoken */
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401) {
        if (sessionStorage.getItem("refresh")) {
            await refreshToken(sessionStorage.getItem("refresh"))
            /* If sessionToken -> put it back in sessionStorage and send the request again */
            try {
                axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("session")}`
                return axios(error.config);
            } catch (e) {
                sessionStorage.clear();
            }
        }
    } else {
        sessionStorage.clear();
    }
    return error;

})