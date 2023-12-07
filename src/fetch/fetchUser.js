import axios from "axios"

export async function createUser(email, passwort, name, telefon, postcode, place, terms) {
    const { data } = await axios.post(import.meta.env.VITE_API_USER_API_ROUTE + "/create",
        {
            email: email,
            passwort: passwort,
            name: name,
            telefon: telefon,
            postcode: postcode,
            place: place,
            terms: terms,
        })

    return data;
}

export async function getUserByID(userID) {
    const { data } = await axios.get(import.meta.env.VITE_API_USER_API_ROUTE + "/getone/" + userID)

    return data

}

export async function patchUser(userID, email, passwort, name, telefon, postcode, place, permission) {
    console.log(permission)
    const { data } = await axios.patch(import.meta.env.VITE_API_USER_API_ROUTE + "/patch/" + userID,
        {
            email: email ? email : "",
            passwort: passwort ? passwort : "",
            name: name ? name : "",
            telefon: telefon ? telefon : "",
            postcode: postcode ? postcode : "",
            place: place ? place : "",
            permission: permission ? permission : "",
            terms: ""
        })

    return data

}

export async function deleteUser(userID) {
    console.log(userID)
    const { data } = await axios.delete(import.meta.env.VITE_API_USER_API_ROUTE + "/delete/" + userID)
    return data
}







