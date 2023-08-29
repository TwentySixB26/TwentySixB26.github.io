let proyek = document.querySelector('.proyek .container .webProyek')
let web = document.querySelectorAll('.proyek .container .webProyek .card')

window.addEventListener('scroll', function() {
    let wScroll = this.scrollY

    if (wScroll > proyek.offsetTop - 1000) {
        for (let i = 0; i < web.length; i++) {
            setTimeout(function() {
                web[i].classList.add('muncul')
            }, 300 * (i + 1));
        }
    }

    if (wScroll < proyek.offsetTop - 350) {
        for (let i = 0; i < web.length; i++) {
            setTimeout(function() {
                web[i].classList.remove('muncul')
            }, 300 * (i + 1));
        }
    }
})