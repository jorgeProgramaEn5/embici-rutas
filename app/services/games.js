import { API_URL, STRAPI_URL } from "../config";

export async function getGames () {
    const res = await fetch(`${API_URL}/video-games?populate[platforms][fields][0]=name&populate[cover][fields]`)
    if (!res.ok) {
        throw new Error('upss something went wrong')
    }
    const { data } = await res.json()
    return data
}

export function getCoverImage({attributes}) {
    const {url} = attributes.cover.data[0].attributes
    return `${STRAPI_URL}${url}`
}