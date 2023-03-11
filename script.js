// ________________________________________drop_sidebar________________________________________________________
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".side-bar");
var container = document.querySelector(".container");




menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    
    // container.banner.img.classList.toggle("wider-banner")
}
// _______________________________________________________________________________________________________________