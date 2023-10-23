import {responce} from "./fetch";
import {contries, genres, lengthI, modal, title, year} from "./model";

export const cDOM = (tag, classItem = '', text ='') => {
    const item = document.createElement(tag)
    item.classList.add(classItem)
    item.textContent = text
    return item
}
export const cAppendChild = (array, item) => {
    array.forEach(el => {
        item.appendChild(el)
    })
}
export const changeNum = (item) => {
    if(item.textContent >= 7.5 || item.textContent >= 75) return item.classList.add('green')
    if(item.textContent <= 7.5 && item.textContent >= 4.0 || item.textContent <= 75 && item.textContent > 40) return item.classList.add('yellow')
    if(item.textContent <= 4.0) return item.classList.add('red')
}
export const openModal = (text) => {
    const res = responce.films

    res.forEach((item, i) => {
        if (item.nameRu == text) {
            title.textContent = item.nameRu
            item.countries.forEach(c => {
                contries.textContent = c.country
            })
            item.genres.forEach(g => {
                genres.textContent = g.genre
            })
            year.textContent = item.year
            lengthI.textContent = item.filmLength + ' часа'
        }
    })
    modal.classList.add('open')
}