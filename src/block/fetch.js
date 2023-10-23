import {createMovies} from "./model";

export let responce

export const dataMovies = async (currentPage) => {
    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`
    const API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'

    const resp = await fetch(API_URL, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': API_KEY
        }
    })
    responce = await resp.json()
    createMovies(responce.films)
}