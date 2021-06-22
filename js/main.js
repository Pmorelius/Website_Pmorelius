
var menu = document.getElementById('menu');
/*  Calcular la altura
alert(menu.offsetTop); 
   */
var altura = menu.offsetTop;
/*  Calcular hasta donde se a movido el scroll
alert(window.pageYOffset); 
 */

window.addEventListener('scroll', function(){
    'use strict';
    if (window.pageYOffset > altura) {
        menu.classList.add('fixed');
    }else{
        menu.classList.remove('fixed');
    }
});


