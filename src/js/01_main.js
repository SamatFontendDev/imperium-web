document.addEventListener("DOMContentLoaded", function(event) {
    new Swiper('.slider', {
        navigation: {
            nextEl: '.slide-button-next',
            prevEl: '.slide-button-prev',
        },
        slidesPerView: 1.8,
        
        centeredSlides: true,
        spaceBetween: 225,
        centeredSlides: true,
        autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 100,
            },
            1300: {
                slidesPerView: 1.8,
                centeredSlides: true,
                spaceBetween: 225,
            }
        }
    })
    

    document.querySelectorAll('.slide__circle').forEach(el => {
        new CircleType(el)
    })

    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav').classList.add('nav--mobile')
        document.querySelector('body').style.overflowY = 'hidden'
    })
    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.nav').classList.remove('nav--mobile')
        document.querySelector('body').style.overflowY = 'visible'
    })
})
