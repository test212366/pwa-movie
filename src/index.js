import {dataMovies} from "./block/fetch";
import {createModalWindow, modal} from "./block/model";
import {openModal} from "./block/utils";

let currentPage = 1
document.addEventListener('DOMContentLoaded',() => {
    dataMovies(currentPage)
    createModalWindow()
})
document.body.addEventListener('click', e => {
    if(e.target.classList.contains('seemore')) {
       currentPage++
        dataMovies(currentPage)
        return
    }
    if(e.target.classList.contains('bDes')) {
        openModal(e.target.parentNode.querySelector('.title').textContent)
        return
    }
    if(e.target.classList.contains('overlay')) {
        modal.classList.remove('open')
        return
    }
})