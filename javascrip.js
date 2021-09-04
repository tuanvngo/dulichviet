const menuBars = document.querySelector('.header__top i')
function open() {
    document.querySelector('.header__top__list').classList.toggle('active')
}
menuBars.addEventListener('click',open )

const search =document.querySelector('.header__top div span i')
search.addEventListener('onclick', function(){
    document.querySelector('.header__top div span input').classList.toggle('open_in')
})