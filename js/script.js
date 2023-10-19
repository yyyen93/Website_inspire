const doms = {
    wrapper: document.querySelector('.wrapper'),
    loginLink: document.querySelector('.login-link'),
    registerLink: document.querySelector('.register-link'),
    btnPopup : document.querySelector('.btnPopup'),
    iconClose : document.querySelector('.icon-close'),
}

doms.registerLink.addEventListener('click', () => {
    doms.wrapper.classList.add('active');
});

doms.loginLink.addEventListener('click', () => {
    doms.wrapper.classList.remove('active');
});

doms.btnPopup.addEventListener('click', () => {
    doms.wrapper.classList.add('active-popup');
});

doms.iconClose.addEventListener('click', () => {
    doms.wrapper.classList.remove('active-popup');
});

