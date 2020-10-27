const navSlide = () => {
    //setando as variaveis
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //clickando no icone do menu
    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        body.classList.toggle('body-overflow');
        
        //animação de cada item individual
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //animação do icone de menu
        menu.classList.toggle('toggle');

    });


}

//chamada da função
navSlide();