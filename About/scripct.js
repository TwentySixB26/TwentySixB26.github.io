let aboutSatuKiri = document.querySelector('section.about-satu .font-aboutMe-satu')
let aboutSatukanan = document.querySelector('section.about-satu .img-aboutmee-satu')

// load 
window.addEventListener('load', function() {
    aboutSatuKiri.classList.add('muncul')
    aboutSatukanan.classList.add('muncul')
})

// paralax
let about3 = document.querySelector('.img-about-mee')
let about3_img = document.querySelectorAll('.img-about-mee img')
let aboutme3 = document.querySelector('section.about-tiga')

window.addEventListener('scroll', function() {
    let wScroll = this.scrollY

    if (window.innerHeight < 730) {
        if (wScroll > about3.offsetTop - 500) {
            for (let i = 0; i < about3_img.length; i++) {
                setTimeout(function() {
                    about3_img[i].classList.add('muncul2')
                }, 400 * (i + 1));
            }
        }
    } else {
        if (aboutme3.offsetTop <= this.window.innerHeight) {
            for (let i = 0; i < about3_img.length; i++) {
                setTimeout(function() {
                    about3_img[i].classList.add('muncul2')
                }, 600 * (i + 1));
            }
        } else if (wScroll > about3.offsetTop - 500) {
            for (let i = 0; i < about3_img.length; i++) {
                setTimeout(function() {
                    about3_img[i].classList.add('muncul2')
                }, 400 * (i + 1));
            }
        }
    }
})