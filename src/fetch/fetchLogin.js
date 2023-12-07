import axios from "axios"

export async function loginUser(email, passwort) {
    /*  let res; */
    const { data } = await axios.post(import.meta.env.VITE_API_LOGIN_API_ROUTE,
        {
            email: email,
            passwort: passwort
        }
    )
    return data;
} 

