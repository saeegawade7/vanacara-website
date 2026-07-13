const cards = document.querySelectorAll('.card');

window.addEventListener('scroll',()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity='1';

card.style.transform='translateY(0)';

}

});

});
const elements = document.querySelectorAll('.pop');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));