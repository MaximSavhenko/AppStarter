function toggleMobileMenu() {
    let btnMenu = document.querySelector('.header__btn-menu'),
        navWrap = document.querySelector('.header__nav-wrap');

    btnMenu.onclick = function() {
        document.body.classList.toggle('overflow');
        btnMenu.classList.toggle('active');
        navWrap.classList.toggle('active');
    };   
};

toggleMobileMenu();