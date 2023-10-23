import {cAppendChild, cDOM, changeNum} from "./utils";

export const createMovies = (dataMovies) => {
    const $movies = document.querySelector('.movies')
    dataMovies.forEach(el => {
        let img, desc, ov, btn, rating
        const movie = cDOM('div', 'movie')
        cAppendChild([img = cDOM('div', 'img'),desc = cDOM('div', 'desc')], movie)
        cAppendChild([ov = cDOM('div', 'ov'),btn = cDOM('button', 'btn', 'Описание')], desc)
        cAppendChild([cDOM('div', 'title', `${el.nameRu}`),rating = cDOM('div', 'number', `${el.rating}`)], ov)
        btn.classList.add('bDes')
        img.innerHTML = `<img src="${el.posterUrlPreview}" alt="${el.nameRu}">`
        $movies.appendChild(movie)
        changeNum(rating)
    })
}
export let wrap, title,contries, genres, year, lengthI, modal
export const createModalWindow = () => {
    modal = cDOM('div', 'modalW')
    cAppendChild([cDOM('div', 'overlay'),wrap = cDOM('div', 'wrapper')],modal)
    cAppendChild([title = cDOM('div', 'title'),contries = cDOM('div', 'contries'), genres = cDOM('div', 'genres'),year = cDOM('div', 'year'), lengthI = cDOM('div', 'length')], wrap)
    document.body.appendChild(modal)
}