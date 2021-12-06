import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '696fbe228fmshe6b3d7bf1bd843fp12903bjsnac987cfb3696'
        }
    })

    return data;
}
