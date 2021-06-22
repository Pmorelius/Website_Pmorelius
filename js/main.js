const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){

   /*  if (window.pageYOffset > altura) { */
        nav.classList.toggle('active', window.scrollY > 0);
    /* }else{
        nav.classList.remove('fixed');
    } */
});