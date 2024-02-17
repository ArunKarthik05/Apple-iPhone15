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
// ---------------------DYNAMIC ISLAND imageframes animations----------
document.addEventListener("DOMContentLoaded", function() {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.dyi-img-container');
    const slider = document.querySelector('.slider');
    let observerAdded = false;
    
    // Options for the intersection observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the target is visible
    };
    
    // Callback function to handle intersection changes
    const handleIntersection = (entries) => {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting && !observerAdded) {
                observerAdded= true;
                console.log("starting")
                startSlideAnimation();
            }
        });
    };
        // Create intersection observer
    if( !observerAdded){
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the slider div
    observer.observe(slider);
    }

    // Start slide animation
    const startSlideAnimation = () => {
        // Show the first slide initially
        showSlide(currentSlideIndex);
        
        // Automatically change slides every 6 seconds
        const intervalId = setInterval(nextSlide, 6000);
        
        // Remove observer and interval when animation is completed
        const animationDuration = 6000 * slides.length;
        setTimeout(() => {
            if (observerAdded) {
                observer.unobserve(slider);
                observerAdded = false; // Reset flag
            }
            clearInterval(intervalId);
        }, animationDuration);
    };
    
    // Show slide at the given index
    const showSlide = (index) => {
       slides.forEach((slide,i) => {
            if( index === i){
            slide.classList.add('active');
            slide.classList.remove('inactive');
            }else{
            slide.classList.add('inactive');
            slide.classList.remove('active');
            }
       })
    };
    
    // Move to the next slide
    const nextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    };
    
});
// ------------------Colors---------------------
const colorOptions = document.querySelectorAll('.color-option');
const model = document.querySelector(".car");
let images = ["black","pink","yellow","green","blue"];
let imgContainer = document.querySelector(".img-clr-container");
let img = document.getElementById("colors-img");


colorOptions.forEach((colorOption,i) => {
    colorOption.addEventListener('click', function() {
        console.log(`Index:${i}`)
        console.log(imgContainer)
        colorOptions.forEach(option => {
            option.classList.remove('color-active');
            option.parentNode.style.border = "none";       
        });

        colorOption.classList.add('color-active');
        console.log(colorOption.parentNode)
        colorOption.parentNode.style.border = "2px solid #0D78E4";       

        if (i === 0) {
            model.style.display = "block";
            imgContainer.style.display = "none";
        } else {
            model.style.display = "none";
            imgContainer.style.display = "block";
            let path = `./assets/phone-colors/${images[i]}.jpg`
            console.log(path)
            img.src = path; // Use the corresponding image URL
        }
    });
});
