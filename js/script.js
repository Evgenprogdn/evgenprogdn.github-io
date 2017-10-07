$(document).ready(function () {
    var nav = $('.nav');
    var burger = $('.burger');
    var shadow = $('#nav-shadow');

    function toggleMenu(e,dir) {
        if(!dir) dir ='';
        switch (dir){
            case '':
                burger.toggleClass('down');
                nav.toggleClass('show');
                shadow.fadeToggle();
                break;
            case 'down':
                burger.addClass('down');
                nav.addClass('show');
                shadow.fadeIn();
                break;
            case 'up':
                burger.removeClass('down');
                nav.removeClass('show');
                shadow.fadeOut();
                break;
        }


    }
    $('.burger').on('click', toggleMenu);
    $('#nav-shadow').on('click', toggleMenu);


});
