let menuIsOpen = !1;
const toggle = document.querySelector(".menu__toggle"),
    menu = document.querySelector(".menu"),
    toggleOne = document.querySelector(".menu__toggle__first"),
    toggleTwo = document.querySelector(".menu__toggle__secound"),
    toggleThree = document.querySelector(".menu__toggle__third"),
    contactButton = document.querySelector(".contact__button"),
    contactModal = document.querySelector(".contact__modal"),
    modalOverlay = document.querySelector(".modal-overlay"),
    contactModalButton = document.querySelector(".contact__modal__link"),
    blurElements = document.querySelectorAll("[data-blur]");

function toggleAnimation() {
    toggleOne.classList.toggle("toggle__one__active"), toggleTwo.classList.toggle("toggle__two__active"), toggleThree.classList.toggle("toggle__three__active"), menuIsOpen = !menuIsOpen
}

function checkTransform() {
    menuIsOpen && window.innerWidth <= 1070 ? (document.body.style.overflowY = menuIsOpen ? "hidden" : "initial", menu.style.cssText = "transform: translate(0); visibility: visible;", menuIsOpen = !0) : !menuIsOpen && window.innerWidth <= 1070 ? (document.body.style.overflowY = menuIsOpen ? "hidden" : "initial", menu.style.cssText = "transform: translate(110%); visibility: hidden; transition: 500ms ease;", menuIsOpen = !1) : (menuIsOpen && window.innerWidth > 1070 || !menuIsOpen && window.innerWidth > 1070) && (menu.style.cssText = "transform: translate(0); visibility: visible;")
}
toggle.addEventListener("click", (() => {
    toggleAnimation(), checkTransform()
})), document.querySelector(".menu__wrapper").addEventListener("click", (() => {
    window.innerWidth <= 1070 && (toggleAnimation(), checkTransform())
})), window.addEventListener("resize", (() => {
    console.log(menuIsOpen), !0 === menuIsOpen && window.innerWidth <= 1070 ? menu.style.cssText = "transform: translate(0); visibility: visible;" : !0 === menuIsOpen && window.innerWidth > 1070 || !1 === menuIsOpen && window.innerWidth <= 1070 ? menu.style.cssText = "transform: translate(110%); visibility: hidden; transition: 500ms ease;" : !1 === menuIsOpen && window.innerWidth > 1070 && (menu.style.cssText = "transform: translate(0); visibility: visible;")
}));
let modalIsOpen = !1;

function showModal() {
    modalIsOpen ? modalIsOpen && (modalOverlay.style.display = "none", blurElements.forEach((e => e.style.cssText = "filter: blur(0)")), contactModal.style.cssText = "opacity: 0; visibility: hidden", modalIsOpen = !1) : (modalOverlay.style.display = "block", blurElements.forEach((e => e.style.cssText = "filter: blur(4px)")), contactModal.style.cssText = "opacity: 1; visibility: visible", modalIsOpen = !0)
}
document.addEventListener("click", (e => {
    const t = contactModal.contains(e.target);
    modalIsOpen && !t && e.target !== contactButton && (showModal(), console.log("teste"))
})), contactButton.addEventListener("click", (e => {
    e.preventDefault(), showModal()
})), contactModalButton.addEventListener("click", (() => {
    showModal()
})), checkTransform();