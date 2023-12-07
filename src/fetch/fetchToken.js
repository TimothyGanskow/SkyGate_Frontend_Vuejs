import axios from "axios"

export async function loginToken(email, passwort) {
    /*  let res; */
    const { data } = await axios.post(import.meta.env.VITE_API_LOGINCHECK_API_ROUTE,
        {
            email: email,
            password: passwort,
        }
    )

    sessionStorage.setItem('session', data.token),
    sessionStorage.setItem('refresh', data.refresh_token)
    return data;
} 


export async function refreshToken(refreshToken) {
    /*  let res; */
    const { data } = await axios.post(import.meta.env.VITE_API_REFRESH_API_ROUTE,
        {
            refresh_token : refreshToken
        }
    )

    sessionStorage.setItem('session', data.token),
    sessionStorage.setItem('refresh', data.refresh_token)
    return data;
} 