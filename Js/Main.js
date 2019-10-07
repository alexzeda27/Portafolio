//Menu dinámico
$('.navegation-web').addClass('selection');


//El contenido de los demas elementos del menu estan ocultos
$('.project-container #terminal').addClass('ocultar');
$('.project-container #videogames').addClass('ocultar');

//Si se hace click en la opcion de navegation-web del menu
$('.navegation-web').click(function(){
    $('.navegation-web').addClass('selection');
    $('.navegation-terminal').removeClass('selection');
    $('.navegation-videogames').removeClass('selection');
    $('#web-design').fadeIn(1000);
    $('#terminal').fadeOut(1000);
    $('#videogames').fadeOut(1000);
    $('#web-design').removeClass('ocultar');
    $('#web-design').css({'display': 'flex'});
    $('#terminal').addClass('ocultar');
    $('#videogames').addClass('ocultar');
    return false;
});

//Si se hace click en la opcion de navegation-terminal del menu
$('.navegation-terminal a').click(function(){
    $('.navegation-web').removeClass('selection');
    $('.navegation-terminal').addClass('selection');
    $('.navegation-videogames').removeClass('selection');
    $('#terminal').fadeIn(1000);
    $('#web-design').fadeOut(1000);
    $('#videogames').fadeOut(1000);
    $('#terminal').removeClass('ocultar');
    $('#terminal').css({'display': 'flex'});
    $('#web-design').addClass('ocultar');
    $('#videogames').addClass('ocultar');
    return false;
});

//Si se hace click en la opcion de navegation-videogames del menu
$('.navegation-videogames a').click(function(){
    $('.navegation-web').removeClass('selection');
    $('.navegation-terminal').removeClass('selection');
    $('.navegation-videogames').addClass('selection');
    $('#videogames').fadeIn(1000);
    $('#terminal').fadeOut(1000);
    $('#web-design').fadeOut(1000);
    $('#videogames').removeClass('ocultar');
    $('#videogames').css({'display': 'flex'});
    $('#web-design').addClass('ocultar');
    $('#terminal').addClass('ocultar');
    return false;
});










