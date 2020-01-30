// HAMBURGUER
var hamb = document.querySelector(".hamb");
hamb.addEventListener ("click", function () {
    var nav = document.querySelector(".nav-ul");
    nav.classList.toggle("active");
});