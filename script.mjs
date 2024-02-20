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
let images = ["all","black","pink","yellow","green","blue"];
let imgContainer = document.querySelector(".img-clr-container");
let img = document.getElementById("colors-img");
let video = document.querySelector(".car")
const spantxt = document.querySelector(".colors-text")

colorOptions.forEach((colorOption,i) => {
    colorOption.addEventListener('click', function() {
        colorOptions.forEach(option => {
            option.classList.remove('color-active');
            option.parentNode.style.border = "none";       
        });

        colorOption.classList.add('color-active');
        console.log(colorOption.parentNode)
        colorOption.parentNode.style.border = "2px solid #0D78E4";       
        spantxt.textContent = `15.54 cm (6.1”) iPhone 15 in ${images[i]}`
        if (i === 0 || i===1) {
            if( i===1){
                video.src = "./assets/iphone-15/scene.gltf"
            }else{
                video.src = "./assets/iphone-model/scene.gltf"
            }
            model.style.display = "block";
            imgContainer.style.display = "none";
            spantxt.style.bottom = "120px"
        } else {
            model.style.display = "none";
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("back");
    const nextBtn = document.getElementById("front");
    let currentSlide = 0;

    // Show initial slide
    showSlide(currentSlide);

    // Button event listeners
    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);

    // Function to show previous slide
    function showPrevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    // Function to show next slide
    function showNextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    // Function to show slide by index
    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(-${index * 100}%)`; // Slide to the right
        });

        // Disable/enable buttons accordingly
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === slides.length - 1;
    }

    // Clicking on the image slides to the right
    const images = document.querySelectorAll(".inner-slide img");
    images.forEach((image) => {
        image.addEventListener("click", showNextSlide);
    });
});
            imgContainer.style.display = "block";
            let path = `./assets/phone-colors/${images[i]}.jpg`
            img.src = path; 
            spantxt.style.bottom = "180px"
        }
    });
});
// ------------------------Floating Bottom--------------
const colorsContainer = document.querySelector('.colors');

window.addEventListener('scroll', function() {
    const section = document.querySelector('.model');
    const sectionTop = section.getBoundingClientRect().top+500;
    //const windowHeight = window.innerHeight;
    console.log(window.scrollY)
    if ( sectionTop > 300 && window.scrollY>2100) {
        colorsContainer.style.visibility = "visible";
        colorsContainer.classList.remove("hidden");
    } else {
        colorsContainer.style.visibility = "hidden";
        colorsContainer.classList.add("hidden");
    }
});
// -----------------------ACCORDIAN--------------
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");
    const contents = document.querySelectorAll(".accordion-content");
    const accordianImage = document.querySelector(".accordian-img");

    accordions.forEach(function(accordion) {
        const header = accordion.querySelector(".accordion-header");
        const content = accordion.querySelector(".accordion-content");
        

        header.addEventListener("click", function() {
            // accordianImage.classList.remove("animateDown");
            contents.forEach((content)=>content.classList.remove("active-accordian"));
            content.classList.add("active-accordian")
            const imageURL = accordion.dataset.image;
            accordianImage.src = imageURL;
            // accordianImage.classList.remove("animateDown");        });
        });
    })
});
// ------------Button Slider--------------
