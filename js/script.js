const openBtns = document.querySelectorAll('.noidung-top button');
const noidungBody = document.querySelectorAll('.js-noidung-body');
const closeBtns = document.querySelectorAll('.noidung-body button')

var lenTruyen = noidungBody.length;

for (let i = 0; i < lenTruyen; i++) {
    openBtns[i].addEventListener('click', openTruyen)
    closeBtns[i].addEventListener('click', closeTruyen)

    function closeTruyen() {
        noidungBody[i].classList.remove('active');
    }

    function openTruyen() {
        noidungBody[i].classList.add('active');
    }
}