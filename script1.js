 function slideBanner() {


    let slider = document.querySelector(".slider")
    let slides = document.querySelectorAll(".hero-section");
    let dots = document.querySelectorAll(".dot");
    let slideIndex = 0;
    let startX = 0;
    let endX = 0;


    function slidShow(index) {
        slides.forEach(function (slide) {
            slide.style.display = "none";
            slides[index].style.display = "block"

        });
        dots.forEach(function (dot) {
            dot.classList.remove("active");
            dots[index].classList.add("active")
        });

        slideIndex = index;
    }

    slidShow(slideIndex);

    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        slidShow(slideIndex);
    }, 5000);

    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            slidShow(i);
        })
    })

    slider.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        slider.style.trans
    })
    slider.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            slideIndex = (slideIndex + 1) % slides.length;
            slidShow(slideIndex);

        } else if (endX - startX > 50) {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            slidShow(slideIndex);

        }

    });


}

 slideBanner();


  