import axios from "axios"

export async function mailAgain(email) {
    /*  let res; */
    const { data } = await axios.post(import.meta.env.VITE_API_MAILAGAIN_API_ROUTE,
        {
            email: email,
        })

    return data;
} 
