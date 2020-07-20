/*$(document).ready(function(){
    $(window).scroll(function(){
        if ($("nav").offset().top > 50) {
            $(".navbar-custom").addClass("navbar-scroll") && $(".nav-link").addClass("link-scroll");
        } else {
            $(".navbar-custom").removeClass("navbar-scroll") && $(".nav-link").removeClass("link-scroll");
        }
        console.log("scrolled")
    })
})*/

//Collapsing navbar on scroll
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("navbar-scroll", window.scrollY != 0);
})