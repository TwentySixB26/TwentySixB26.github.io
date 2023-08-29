// load
let info_contactSatu = document.querySelector('section.contact-satu .info');

window.addEventListener('load', function() {
    info_contactSatu.classList.add('muncul')
});


// pesan terkirim

let email = document.querySelector('#email');
let nameUser = document.querySelector('#name');
let saranDanPesan = document.querySelector('#sendmessege');
let form = document.querySelector('section.contact-dua .messege form');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    alert(`terima kasih ${nameUser.value} :) telah memberikan masukan yaitu ${saranDanPesan.value} `)

})