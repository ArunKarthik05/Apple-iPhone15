// ----------------Navbar-appear----------
const navbar = document.getElementById("float-nav")

window.addEventListener("scroll", toggleNav);

function toggleNav(){
    const requiredHeight = 300;
    if( scrollY >= requiredHeight){
        navbar.style.top = 0
    }else{
        navbar.style.top = "-50px";
    }
}