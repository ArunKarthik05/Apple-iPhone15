//-cursor
const dot = document.querySelector(".cursor-dot");
const circle = document.querySelector(".cursor-outline");

window.addEventListener("mousemove",(e)=>{
    const posX  = e.clientX
    const posY  = e.clientY

    dot.style.left = `${posX}px`
    circle.style.left = `${posX}px`

    dot.style.top = `${posY}px`
    circle.style.top = `${posY}px`

    circle.animate({
        top:`${posY}px`,
        left : `${posX}px`
    },{duration:500, fill:"forwards"})
})
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
const spantxt = document.querySelector(".colors-text")
console.log(spantxt)

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
            spantxt.style.bottom = "120px"
        } else {
            model.style.display = "none";
            imgContainer.style.display = "block";
            let path = `./assets/phone-colors/${images[i]}.jpg`
            img.src = path; 
            spantxt.textContent = `15.54 cm (6.1”) iPhone 15 in ${images[i]}`
            spantxt.style.bottom = "180px"
            console.log(spantxt.textContent)
        }
    });
});
// ------------------------Floating Bottom--------------
const colorsContainer = document.querySelector('.colors');

window.addEventListener('scroll', function() {
    const section = document.querySelector('.model');
    const sectionTop = section.getBoundingClientRect().top+500;
    // const windowHeight = window.innerHeight;

    if ( sectionTop > 300 && sectionTop>0) {
        colorsContainer.style.visibility = "visible";
        colorsContainer.classList.remove("hidden");
    } else {
        colorsContainer.style.visibility = "hidden";
        colorsContainer.classList.add("hidden");
    }
});
// ---------------Potrait Slider----------
// const sliderContainer = document.querySelector('.potrait-slider-container');

// let focusedIndex = 0;

// function updateSlider() {
//     const items = document.querySelectorAll('.slider-item');
//     items.forEach((item, index) => {
//         if (index === focusedIndex) {
//             item.classList.add('focused');
//             item.classList.remove('overlay');
//         } else {
//             item.classList.remove('focused');
//             item.classList.add('overlay');
//         }
//     });
// }

// function handleSwipe(direction) {
//     if (direction === 'right') {
//         focusedIndex = (focusedIndex + 1) % items.length;
//     } else if (direction === 'left') {
//         focusedIndex = (focusedIndex - 1 + items.length) % items.length;
//     }
//     updateSlider();
// }

// sliderContainer.addEventListener('touchstart', handleTouchStart, false);
// sliderContainer.addEventListener('touchmove', handleTouchMove, false);

// let xDown = null;
// let yDown = null;

// function handleTouchStart(event) {
//     const firstTouch = event.touches[0];
//     xDown = firstTouch.clientX;
//     yDown = firstTouch.clientY;
// }

// function handleTouchMove(event) {
//     if (!xDown || !yDown) {
//         return;
//     }

//     const xUp = event.touches[0].clientX;
//     const yUp = event.touches[0].clientY;

//     const xDiff = xDown - xUp;
//     const yDiff = yDown - yUp;

//     if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         /* Most significant */
//         if (xDiff > 0) {
//             /* left swipe */
//             handleSwipe('left');
//         } else {
//             /* right swipe */
//             handleSwipe('right');
//         }
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;
// }
// -----------Modern---------------
