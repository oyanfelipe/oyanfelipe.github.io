class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, containerBtn) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const btn = document.querySelector('.btn');
const containerbtn = document.querySelector('.container-btn');
const head = document.querySelector('.head');
const button = document.querySelector('.button');
const navlist = document.querySelector('.nav-list');
const corpo = document.querySelector('.corpo');


document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "dark");
});

document.addEventListener("DOMContentLoaded", function(event){
    document.documentElement.setAttribute("data-theme", "light");

    btn.onclick = function (){
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme =currentTheme === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme", switchToTheme);
        this.classList.toggle('activ')
        containerbtn.classList.toggle('activ')
        corpo.classList.toggle('activ')
        head.classList.toggle('activ')
        navlist.classList.toggle('activ')
        button.classList.toggle('activ')
    }
});
