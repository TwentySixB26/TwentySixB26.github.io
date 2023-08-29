let proyek = document.querySelector('.portpolio-web .container .webProyek')
let web = document.querySelectorAll('.portpolio-web .container .webProyek .card')

window.addEventListener('scroll', function() {
    let wScroll = this.scrollY

    if (wScroll > proyek.offsetTop - 600) {
        for (let i = 0; i < web.length; i++) {
            setTimeout(function() {
                web[i].classList.add('muncul')
            }, 300 * (i + 1));
        }
    }

    if (wScroll < proyek.offsetTop - 520) {
        for (let i = 0; i < web.length; i++) {
            setTimeout(function() {
                web[i].classList.remove('muncul')
            }, 300 * (i + 1));
        }
    }
})