import axios from "axios";


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
            const { status, data } = await axios.post(import.meta.env.VITE_API_REFRESH_API_KEY, {
                token: sessionStorage.getItem("refresh")
            }).then(
                response => { sessionStorage.setItem('session', response.data.sessionToken) }
            ).catch(e => { console.log(e) })

            /* If sessionToken -> put it back in sessionStorage and send the request again */
            if (status === 200) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${sessionStorage.getItem("session")}`
                return axios(error.config);
            } else {
                sessionStorage.clear();
            }
        }
    } else {
        sessionStorage.clear();
    }
    return error;

})

// Response interceptor for API calls
/* axios.interceptors.response.use((response) => {
    return response
}, async function (error) {

    const originalRequest = error.config;
    if (error.response.status === 500 && !originalRequest._retry) {
        originalRequest._retry = true;
        await axios.post(import.meta.env.VITE_API_REFRESH_API_KEY, {
            token: sessionStorage.getItem("refresh")
        }).then(resp =>
            sessionStorage.setItem('session', resp.data.sessionToken))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem("session");
        return axios(originalRequest);
    }
    return Promise.reject(error);
}); */