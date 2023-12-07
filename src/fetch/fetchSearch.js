import axios from "axios"

export async function searchUser(offset, orderBy, sc, email, name, place, postcode, telefon) {
    const { data } = await axios.post(import.meta.env.VITE_API_SEARCH_API_ROUTE, {
        offset: offset,
        orderBy: orderBy !== "" ? orderBy : "email",
        sc: sc == true ? "asc" : "desc",
        email: email,
        name: name,
        telefon: telefon,
        postcode: postcode,
        place: place
    })

    return data;
}


export async function searchUserCounter(orderBy, sc, email, name, place, postcode, telefon) {
    /*  let res; */
    const { data } = await axios.post(import.meta.env.VITE_API_SEARCHCOUNTER_API_ROUTE, {
        offset: 0,
        orderBy: orderBy !== "" ? orderBy : "email",
        sc: sc == true ? "asc" : "desc",
        email: email,
        name: name,
        telefon: telefon,
        postcode: postcode,
        place: place 
    })
    return data;
}

