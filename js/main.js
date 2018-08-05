(function () {
    var itemColor = document.getElementsByClassName('item'),
    botonMenu = document.querySelector('.button-menu'),
    mainNavigation = document.querySelector('.main-navigation'),
    slide = document.querySelector('.slide'),
    exa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
    img = ['1', '2', '3'],
    tiempo = 10000,
        random,
        color = {
            r1: "",
            r2: "",
            g1: "",
            g2: "",
            b1: "",
            b2: "",
        };

    var seleccionarColor = function () {
        for (const i in color) { 
            random = exa[parseInt(Math.random()*exa.length)];
            color[i] = random;
        }    
    }

    var imageSlide = function () {
        random = img[parseInt(Math.random()*img.length)];
       slide.style.backgroundImage = "url('img/"+random+".jpg')";
    }
    
    var colorItem = function () {
        for (const i in itemColor) {
            seleccionarColor();
            itemColor.item(i).style.background = '#'+color.r1+color.r2+color.g1+color.g2+color.b1+color.b2+'90';
        }
    }

    var showMenu = function () {
        mainNavigation.classList.toggle('show-menu');
    }

    botonMenu.addEventListener('click', showMenu);
    setTimeout(imageSlide,0);
    setInterval(imageSlide, tiempo);
    setInterval(colorItem,tiempo);

    


}())