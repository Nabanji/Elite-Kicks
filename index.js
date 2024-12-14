const sidebarBtn = document.querySelector('.sidebar');
const closesideBar = document.querySelector('.close');

const navLinks = document.querySelector('.nav-links');

const shopBtn = document.querySelector('.shop-btn');

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    AOS.init();

    sidebarBtn.addEventListener('click', () => {
        navLinks.style.marginRight = '0px';
    });

    closesideBar.addEventListener('click', () => {
        navLinks.style.marginRight = '-200px';
    })

    shopBtn.addEventListener('click', () => {
        window.location.href = './shop.html';
    })
})