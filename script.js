let bar = document.querySelector('.bar');
document.querySelector('#menu-btn').onclick = () =>{
    bar.classList.toggle('active');
}
let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}